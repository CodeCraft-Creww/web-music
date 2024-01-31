import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artists.service';
import { map } from 'rxjs/operators';
import { Artist } from 'src/app/models/artist.model';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistsListComponent implements OnInit {
  artists?: any;
  currentArtist?: Artist;
  currentIndex = -1;
  title = '';

  constructor(private artistService: ArtistService) { }

  ngOnInit(): void {
    this.retrieveArtists();
  }

  refreshList(): void {
    this.currentArtist = undefined;
    this.currentIndex = -1;
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

  setActiveArtist(artist: Artist, index: number): void {
    this.currentArtist = artist;
    this.currentIndex = index;
  }
  deleteArtist(currentArtist: any): void {
    if (currentArtist.id) {
      this.artistService.delete(currentArtist.id)
        .then(() => {
          this.refreshList();
        })
        .catch(err => console.log(err));
    }
  }
}
