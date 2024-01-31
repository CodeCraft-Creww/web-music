import { Component, OnInit } from '@angular/core';
import { forEach } from 'lodash-es';
import { map } from 'rxjs/operators';
import { AlbumService } from 'src/app/services/album.service';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-songs-page',
  templateUrl: './songs-page.component.html',
  styleUrls: ['./songs-page.component.scss']
})
export class SongsPageComponent implements OnInit {
  topSongs: any[] = [
    { rank: 1},
    { rank: 2},
    { rank: 3 },
    { rank: 4 },
    { rank: 5 },
    { rank: 6},
  ];


  songs?: any;
  albums?: any;

  constructor( private songService: SongService,
    private albumService: AlbumService) { }

  ngOnInit(): void {
    this.retrieveSongs();
    this.retrieveAlbums();
  }

  refreshList(): void {
    this.retrieveSongs();
    this.retrieveAlbums();
  }

  retrieveSongs(): void {
    this.songService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data(), showAudioDropdown: false })
        )
      )
    ).subscribe(data => {
      this.songs = data;
      forEach(this.songs, x => x.releaseDate = new Date(x.releaseDate.seconds * 1000))
    });
  }

  toggleAudioDropdown(song: any): void {
    this.songService.setSharedData(song)
    // song.showAudioDropdown = !song.showAudioDropdown;
    // this.closeOtherDropdowns(song);
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

  
  retrieveAlbums(): void {
    this.albumService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.albums = data;
      forEach(this.albums, x=>x.releaseDate = new Date(x.releaseDate.seconds * 1000))
    });
    
  }
}
