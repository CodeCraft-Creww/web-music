import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Artist } from '../../../models/artist.model';
import { ArtistService } from '../../../services/artists.service';
import { map } from 'rxjs';
import { AlbumService } from 'src/app/services/album.service';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent implements OnInit {
  @Input() artist?: Artist;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentArtist: Artist = {
    id: '',
    bio: '',
    name: '',
    photoUrl: '',
    albumIds: [],
    songIds: [],
    albums: [],

  };
  message = '';
  albums: any;
  songs: any;

  constructor(private artistService: ArtistService,    
    private albumService: AlbumService,
    private songService: SongService
    
    ) { }

  ngOnInit(): void {
    this.message = '';
    this.albumService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.albums = data;
    });

    this.songService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.songs = data;
    });
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentArtist = { ...this.artist };
  }

  updatePublished(status: boolean): void {
    if (this.currentArtist.id) {
      this.artistService.update(this.currentArtist.id, { published: status })
      .then(() => {
        this.message = 'The status was updated successfully!';
      })
      .catch(err => console.log(err));
    }
  }

  updateArtist(): void {
    const data = {
      name: this.currentArtist.name,
      bio: this.currentArtist.bio,
      photoUrl: this.currentArtist.photoUrl,
      albumIds: this.currentArtist.albumIds,
      songIds: this.currentArtist.songIds
    };

    if (this.currentArtist.id) {
      this.artistService.update(this.currentArtist.id, data)
        .then(() => this.message = 'The artist was updated successfully!')
        .catch(err => console.log(err));
    }
  }

  deleteArtist(): void {
    if (this.currentArtist.id) {
      this.artistService.delete(this.currentArtist.id)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The artist was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  }
}
