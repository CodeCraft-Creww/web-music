import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { AlbumService } from 'src/app/services/album.service';
import { ArtistService } from 'src/app/services/artists.service';

@Component({
  selector: 'app-feature-artist',
  templateUrl: './feature-artist.component.html',
  styleUrls: ['./feature-artist.component.scss']
})
export class FeatureArtistComponent implements OnInit {
  artists?: any;
  albums?: any;

  constructor( private artistService: ArtistService, private albumService: AlbumService) { }

  ngOnInit(): void {
    this.retrieveArtists();
    this.retrieveAlbums();
  }

  refreshList(): void {
    this.retrieveArtists();
    this.retrieveAlbums();
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
    });
    
  }

  retrieveArtists(): void {
    this.artistService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.artists = data;
    });
  }
}
