import { Component, OnInit } from '@angular/core';
import { forEach } from 'lodash-es';
import { map } from 'rxjs/operators';
import { AlbumService } from 'src/app/services/album.service';

interface Album {
  id?: string;
  title?: string;
  artistId?: string;
  releaseDate?: Date;
  coverImages?: string;
  songIds?: string[];
  view?: number;
}

@Component({
  selector: 'app-top100',
  templateUrl: './top100.component.html',
  styleUrls: ['./top100.component.scss']
})
export class Top100Component implements OnInit {

  albums?: Album[];
  top5Albums: Album[] = []; 

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
          ({ id: c.payload.doc.id, ...c.payload.doc.data() } as Album)
        )
      )
    ).subscribe(data => {
      this.albums = data;

      this.top5Albums = this.getTop5AlbumsByViews();
    });
  }

  getTop5AlbumsByViews(): Album[] {
    return (this.albums ?? [])
      .filter((album: Album) => album.view !== undefined)
      .sort((a: Album, b: Album) => (b.view || 0) - (a.view || 0))
      .slice(0, 5);
  }
}
