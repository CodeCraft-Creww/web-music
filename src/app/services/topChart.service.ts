import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { TopChart } from '../models/topChart.model';

@Injectable({
  providedIn: 'root'
})
export class TopChartService {
  private dbPath = '/topChart';

  topChartRef: AngularFirestoreCollection<TopChart>;

  constructor(private db: AngularFirestore) {
    this.topChartRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<TopChart> {
    return this.topChartRef;
  }

  create(topChart: TopChart): any {
    return this.topChartRef.add({ ...topChart });
  }

  update(id: string, data: any): Promise<void> {
    return this.topChartRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.topChartRef.doc(id).delete();
  }
}
