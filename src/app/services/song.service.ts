import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Song } from '../models/song.model';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private dbPath = '/songs';

  songRef: AngularFirestoreCollection<Song>;
  private sharedDataSubject = new Subject<any>();

  constructor(private db: AngularFirestore, private storage: AngularFireStorage) {
    this.songRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Song> {
    return this.songRef;
  }

  create(song: Song): any {
    return this.songRef.add({ ...song });
  }

  update(id: string, data: any): Promise<void> {
    return this.songRef.doc(id).update(data);
  }

  delete(song: any): Promise<void> {
    if(song.url !== null && song.url !== undefined)  this.storage.refFromURL(song.url).delete();
    if(song.urlImage !== null && song.urlImage !== undefined)  this.storage.refFromURL(song.urlImage).delete();
    return this.songRef.doc(song.id).delete();
  }

  private sharedData: any;

  setSharedData(data: any): void {
    this.sharedDataSubject.next(data);
  }

  getSharedData(): Subject<any> {
    return this.sharedDataSubject;
  }
}
