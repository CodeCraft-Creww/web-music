import { Component, OnInit } from '@angular/core';
import { forEach } from 'lodash-es';
import { map } from 'rxjs/operators';
import { SongService } from 'src/app/services/song.service';
import { MyPlaylistService } from 'src/app/services/my-playlist.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {
  songs?: any;
  isFavorite: boolean[] = [];

  constructor(private songService: SongService,private playlistService: MyPlaylistService) { }

  ngOnInit(): void {
    this.retrieveSongs();
  }

  refreshList(): void {
    this.retrieveSongs();
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

  addToPlaylist(song: any, index: number): void {
    this.playlistService.addToPlaylist(song);
    this.isFavorite[index] = true;
  }
}
