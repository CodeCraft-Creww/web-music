import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ArtistService } from 'src/app/services/artists.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {
  artists?: any;

  constructor( private artistService: ArtistService) { }

  ngOnInit(): void {
    this.retrieveArtists();
  }

  refreshList(): void {
    this.retrieveArtists();
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
