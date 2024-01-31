import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/artist.model';
import { ArtistService } from 'src/app/services/artists.service';
import { AlbumService } from 'src/app/services/album.service';
import { SongService } from 'src/app/services/song.service';
import { map } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-add-artist',
  templateUrl: './add-artist.component.html',
  styleUrls: ['./add-artist.component.css'],
})
export class AddArtistComponent implements OnInit {
  artist: Artist = new Artist();
  submitted = false;
  albums: any;
  songs: any;

  constructor(
    private artistService: ArtistService,
    private albumService: AlbumService,
    private songService: SongService,
    private storage: AngularFireStorage
  ) {}

  ngOnInit(): void {
    this.albumService
      .getAll()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            id: c.payload.doc.id,
            ...c.payload.doc.data(),
          }))
        )
      )
      .subscribe((data) => {
        this.albums = data;
      });

    this.songService
      .getAll()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            id: c.payload.doc.id,
            ...c.payload.doc.data(),
          }))
        )
      )
      .subscribe((data) => {
        this.songs = data;
      });
  }

  saveArtist(): void {
    this.artistService.create(this.artist).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  newArtist(): void {
    this.submitted = false;
    this.artist = new Artist();
  }
  onFileSelected(event: any) {
    // Access the selected file
    this.selectedFile = event.target.files[0];
    console.log('Selected File:', this.selectedFile);
    this.onUpload();
  }

  isUploading = false;
  selectedFile: File | null = null;

  onUpload() {
    if (this.selectedFile) {
      this.isUploading = true;

      const filePath = `uploads/${this.selectedFile.name}`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, this.selectedFile);

      task.snapshotChanges().subscribe(
        (snapshot) => {
          // Xử lý khi có thay đổi trong quá trình upload
        },
        (error) => {
          console.error(error);
          this.isUploading = false; // Vô hiệu hiệu ứng nếu có lỗi
        },
        () => {
          // Xử lý khi upload thành công
          fileRef.getDownloadURL().subscribe((url) => {
            console.log('URL tệp tin:', url);
            this.artist.photoUrl = url;
            this.isUploading = false; // Vô hiệu hiệu ứng sau khi upload thành công
          });
        }
      );
    }
  }
}
