import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Gener } from '../models/gener.model';

@Injectable({
  providedIn: 'root'
})
export class GenerService {
  private dbPath = '/geners';

  genersRef: AngularFirestoreCollection<Gener>;

  constructor(private db: AngularFirestore) {
    this.genersRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Gener> {
    return this.genersRef;
  }

  create(gener: Gener): any {
    return this.genersRef.add({ ...gener });
  }

  update(id: string, data: any): Promise<void> {
    return this.genersRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.genersRef.doc(id).delete();
  }
}
