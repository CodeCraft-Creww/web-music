import { Component, OnInit, ViewChild } from '@angular/core';
import { SongService } from 'src/app/services/song.service';
import { map } from 'rxjs/operators';
import { Song } from 'src/app/models/song.model';
import { SongModalsComponent } from '../songs-modal/song-modal.component';
import { forEach } from 'lodash-es';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css'],
  providers: [ConfirmationService, MessageService],
})
export class SongsListComponent implements OnInit {
  @ViewChild('appSongModal')
  appSongModal!: SongModalsComponent;

  songs?: any;
  title = '';

  constructor(
    private songService: SongService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.retrieveSongs();
  }

  refreshList(): void {
    this.retrieveSongs();
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

  setActiveSong(song?: Song): void {
    // debugger;
    if (!song) {
      song = new Song();
    }
    this.appSongModal.show(song);
  }

  deleteSong(currentSong: any): void {
    if (currentSong.id) {
      this.songService
        .delete(currentSong)
        .then(() => {
          this.refreshList();
        })
        .catch((err) => console.log(err));
    }
  }
}
