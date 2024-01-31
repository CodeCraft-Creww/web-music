import { Component, OnInit } from '@angular/core';
import { forEach } from 'lodash-es';
import { map } from 'rxjs';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  albums?: any;

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.retrieveAlbums();
  }

  refreshList(): void {
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
      forEach(this.albums, x=>x.releaseDate = new Date(x.releaseDate.seconds * 1000))
    });
    
  }
}
