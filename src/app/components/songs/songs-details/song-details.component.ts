import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Song } from '../../../models/song.model';
import { SongService } from '../../../services/song.service';
import { map } from 'rxjs';
import { AlbumService } from 'src/app/services/album.service';
import { ArtistService } from 'src/app/services/artists.service';
import { GenerService } from 'src/app/services/geners.service';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.css']
})
export class SongDetailsComponent implements OnInit {
  @Input() song?: Song;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentSong: Song = {
    id: '',
    title: '',
    duration: 0,
    releaseDate: new Date,
    albumId: '',
    artistId: '',
    generId: '',
  };
  message = '';
  albums: any;
  artists: any;
  geners: any;

  constructor(private songService: SongService,    
    private albumService: AlbumService,
    private artistService: ArtistService,
    private generService: GenerService
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

    this.artistService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.artists = data;
    });

    this.generService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.geners = data;
    });
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentSong = { ...this.song };
  }

  updatePublished(status: boolean): void {
    if (this.currentSong.id) {
      this.songService.update(this.currentSong.id, { published: status })
      .then(() => {
        this.message = 'The status was updated successfully!';
      })
      .catch(err => console.log(err));
    }
  }

  updateSong(): void {
    if (this.currentSong.id) {
      this.songService.update(this.currentSong.id, this.currentSong)
        .then(() => this.message = 'The song was updated successfully!')
        .catch(err => console.log(err));
    }
  }

  deleteSong(): void {
    if (this.currentSong.id) {
      this.songService.delete(this.currentSong.id)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The song was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  }
}
