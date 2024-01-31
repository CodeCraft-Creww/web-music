import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Artist } from '../models/artist.model';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private dbPath = '/artists';

  artistsRef: AngularFirestoreCollection<Artist>;

  constructor(private db: AngularFirestore) {
    this.artistsRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Artist> {
    return this.artistsRef;
  }

  create(artist: Artist): any {
    return this.artistsRef.add({ ...artist });
  }

  update(id: string, data: any): Promise<void> {
    return this.artistsRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.artistsRef.doc(id).delete();
  }
}
