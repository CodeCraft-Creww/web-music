import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/services/album.service';
import { AuthService } from 'src/app/services/auth.service';
import { map } from 'rxjs';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.scss']
})
export class ClientHeaderComponent implements OnInit {
  songSearch?: any = undefined
  constructor( public authService: AuthService, private songService: SongService) {}
  resultsSearch?: any = false
  ngOnInit(): void {
    this.retrieveSongs();

    document.addEventListener('click', (event: MouseEvent) => {
        var searchInput = document.getElementById('searchInput') as HTMLInputElement | null;
        var boxSearch = document.querySelector('.search-box') as HTMLInputElement | null;
        var targetElement = event.target as Node | null; 
        if (searchInput && targetElement && searchInput.contains(targetElement) || boxSearch && targetElement && boxSearch.contains(targetElement)) {
        } else {
            this.resultsSearch = [];
        }
    });
}

  retrieveSongs(): void {
    this.songService.getAll().snapshotChanges().pipe(
      map((changes: any) =>
        changes.map((c: any) =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data(), showAudioDropdown: false })
        )
      )
    ).subscribe(data => {
      this.songSearch = data;
    });
  }

  Search(value: any) {
    const searchTerm = value.target.value
    if(searchTerm === '') {
      this.resultsSearch = []
    }else {
      this.resultsSearch = this.songSearch.filter((song: any) => song.title && song.title.toLowerCase().includes(searchTerm.toLowerCase()));
      
    }
    
  }

  toggleAudioDropdown(song: any) {
    this.songService.setSharedData(song)
  }

  closeOtherDropdowns(currentSong: any): void {
    if (this.songSearch) {
      this.songSearch.forEach((song: any) => {
        if (song !== currentSong) {
          song.showAudioDropdown = false;
        }
      });
    }
  }

  isArrayEmpty(arr: any) {
    if (Array.isArray(arr) && arr.length === 0) {
      return true;
    } else {
      return false;
    }
  }

}
