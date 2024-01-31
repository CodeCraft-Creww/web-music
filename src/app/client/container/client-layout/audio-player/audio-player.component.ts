import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, isEmpty, map } from 'rxjs';
import { MyPlaylist } from 'src/app/models/my-playlist.model';
import { Song } from 'src/app/models/song.model';
import { MyPlaylistService } from 'src/app/services/my-playlist.service';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
})
export class AudioPlayerComponent {
  @Input() selectedSong: any;
  isFavorite: boolean[] = [];
  data?: MyPlaylist;
  list?: any[];
  listCheck?: any;

  constructor(
    private playlistService: MyPlaylistService,
    private songService: SongService,
    private auth: AngularFireAuth
  ) {}

  ngOnInit() {
    // Subscribe to the data in the constructor
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
        this.list = data;
        this.listCheck = data.find((x) => x.userId == userId);
      });


    this.subscribeToData();
  }

  checkSong(song: Song): boolean{
    if(this.listCheck){
      var check = this.listCheck.songId.find((x: string) => x == song.id)
      if(check){
        return true
      }
    }
    return false
  }

  addToPlaylist(song: any): void {
    var userId = localStorage.getItem('userID');

    let filteredArray = this.list?.filter((item) => item.userId === userId);
    if (userId && song.id) {
      this.data = {
        songId: [song.id],
        userId: userId,
      };
      if (filteredArray && filteredArray.length > 0) {
        filteredArray[0].songId = [...filteredArray[0].songId, song.id];
        this.playlistService.update(filteredArray[0].id, filteredArray[0]);
      } else {
        this.playlistService.create(this.data);
      }
    }

    // this.playlistService.addToPlaylist(song);
    alert('Added to my playlist ');
    this.checkSong(song)
  }

  subscribeToData() {
    this.songService.getSharedData().subscribe((data: any) => {
      this.selectedSong = data;
    });
  }
}
