import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Album } from '../models/album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  
  private dbPath = '/albums';

  albumRef: AngularFirestoreCollection<Album>;

  constructor(private db: AngularFirestore) {
    this.albumRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Album> {
    return this.albumRef;
  }
  
  create(album: Album): any {
    return this.albumRef.add({ ...album });
  }

  update(id: string, data: any): Promise<void> {
    return this.albumRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.albumRef.doc(id).delete();
  }



}
