import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { forEach } from 'lodash-es';
import { map } from 'rxjs';
import { AlbumService } from 'src/app/services/album.service';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.scss'],
})
export class MusicListComponent implements OnInit {
  @Output() data: EventEmitter<any> = new EventEmitter();

  albums?: any;
  songs?: any;

  topSongs: any[] = [
    { rank: 1 },
    { rank: 2 },
    { rank: 3 },
    { rank: 4 },
    { rank: 5 },
    { rank: 6 },
  ];

  constructor(
    private albumService: AlbumService,
    private songService: SongService
  ) {}

  ngOnInit(): void {
    this.retrieveAlbums();
    this.retrieveSongs();
  }

  refreshList(): void {
    this.retrieveAlbums();
    this.retrieveSongs();
  }

  retrieveAlbums(): void {
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
  }
  retrieveSongs(): void {
    this.songService
      .getAll()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            id: c.payload.doc.id,
            ...c.payload.doc.data(),
            showAudioDropdown: false,
          }))
        )
      )
      .subscribe((data) => {
        this.songs = data;
        forEach(
          this.songs,
          (x) => (x.releaseDate = new Date(x.releaseDate.seconds * 1000))
        );
      });
  }

  toggleAudioDropdown(song: any): void {
    this.songService.setSharedData(song)
    // this.songService.setData(song)
  }

  closeOtherDropdowns(currentSong: any): void {
    if (this.songs) {
      this.songs.forEach((song: any) => {
        if (song !== currentSong) {
          song.showAudioDropdown = false;
        }
      });
    }
  }
}
