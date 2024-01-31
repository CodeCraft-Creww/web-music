import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { MyPlaylistService } from 'src/app/services/my-playlist.service';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-my-playlist-page',
  templateUrl: './my-playlist-page.component.html',
  styleUrls: ['./my-playlist-page.component.scss'],
})
export class MyPlaylistPageComponent implements OnInit {
  favoriteSongs?: any;
  list?: any;
  listSong?: any[];
  playList?: any[];
  data?: any
  constructor(
    private playlistService: MyPlaylistService,
    private songService: SongService
  ) {}

  ngOnInit(): void {
    var userId = localStorage.getItem('userID');
    this.playlistService
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
        this.list = data.find((x) => x.userId == userId);

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
            this.listSong = data;
              this.playList = this.listSong?.filter((song) =>
                this.list.songId.includes(song.id)
              );
          });
      });

    this.favoriteSongs = this.playlistService.getPlaylist();
  }

  toggleAudioDropdown(song: any): void {
    this.songService.setSharedData(song);
  }

  deletePlayList(song: any) {
    this.list.songId = this.list.songId.filter((x: string) => x !== song.id)
    this.playlistService.update(this.list.id, this.list)
  }

  closeOtherDropdowns(currentSong: any): void {
    if (this.favoriteSongs) {
      this.favoriteSongs.forEach((song: any) => {
        if (song !== currentSong) {
          song.showAudioDropdown = false;
        }
      });
    }
  }
}
