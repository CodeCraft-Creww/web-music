import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { MyPlaylist } from '../models/my-playlist.model';

@Injectable({
  providedIn: 'root'
})
export class MyPlaylistService {

  private dbPath = '/favorite-musics';

  myPlaylistRef: AngularFirestoreCollection<MyPlaylist>;

  constructor(private db: AngularFirestore) {
    this.myPlaylistRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<MyPlaylist> {
    return this.myPlaylistRef
  }

  create(myPlaylist: MyPlaylist): any {
    return this.myPlaylistRef.add({ ...myPlaylist });
  }

  update(id: string, data: any): Promise<void> {
    return this.myPlaylistRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.myPlaylistRef.doc(id).delete();
  }

  getById(id: string){
    return this.myPlaylistRef.doc(id).get()
  }

  favoriteSongs: any[] = [];

  addToPlaylist(song: any): void {
    this.favoriteSongs.push(song);
  }

  getPlaylist(): any[] {
    return this.favoriteSongs;
  }


}
