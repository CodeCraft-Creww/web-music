import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/models/song.model';
import { AlbumService } from 'src/app/services/album.service';
import { SongService } from 'src/app/services/song.service';
import { map } from 'rxjs';
import { ArtistService } from 'src/app/services/artists.service';
import { GenerService } from 'src/app/services/geners.service';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})
export class AddSongComponent implements OnInit {
  song: Song = new Song();
  submitted = false;
  albums: any;
  artists: any;
  geners: any;

  constructor(private songService: SongService,
    private albumService: AlbumService,
    private artistService: ArtistService,
    private generService: GenerService
    ) { }

  ngOnInit(): void {
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

  saveSong(): void {
    
    // this.songService.create(this.song).then(() => {
    //   console.log('Created new item successfully!');
    //   this.submitted = true;
    // });
  }

  newSong(): void {
    this.submitted = false;
    this.song = new Song();
  }
}
