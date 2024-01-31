import { Component, OnInit, ViewChild } from '@angular/core';
import { AlbumService } from 'src/app/services/album.service';
import { map } from 'rxjs/operators';
import { Album } from 'src/app/models/album.model';
import { AlbumModalsComponent } from '../albums-modal/album-modal.component';
import { forEach } from 'lodash-es';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class AlbumsListComponent implements OnInit {
  @ViewChild('appAlbumModal')
  appAlbumModal!: AlbumModalsComponent;

  albums?: any;
  title = '';

  constructor(private albumService: AlbumService,
    private confirmationService: ConfirmationService, private messageService: MessageService,  public authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    if(this.authService.checkLogin()){
    }
    else{
      this.router.navigate(['/admin/sign-in']);
    }
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

  setActiveAlbum(album?: Album): void {
    if(!album){
      album = new Album();
    }
    this.appAlbumModal.show(album);
  }

  confirm(event: Event, currentAlbum: any) {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Are you sure that you want to proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.deleteAlbum(currentAlbum)
        },
        reject: () => {
            
        }
    });
}
  deleteAlbum(currentAlbum: any): void {
    if (currentAlbum.id) {
      this.albumService.delete(currentAlbum.id)
        .then(() => {
          this.refreshList();
        })
        .catch(err => console.log(err));
    }
  }
}
