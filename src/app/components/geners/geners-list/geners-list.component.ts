import { Component, OnInit } from '@angular/core';
import { GenerService } from 'src/app/services/geners.service';
import { map } from 'rxjs/operators';
import { Gener } from 'src/app/models/gener.model';

@Component({
  selector: 'app-geners-list',
  templateUrl: './geners-list.component.html',
  styleUrls: ['./geners-list.component.css']
})
export class GenersListComponent implements OnInit {
  geners?: any;
  currentGener?: Gener;
  currentIndex = -1;
  title = '';

  constructor(private generService: GenerService) { }

  ngOnInit(): void {
    this.retrieveGeners();
  }

  refreshList(): void {
    this.currentGener = undefined;
    this.currentIndex = -1;
    this.retrieveGeners();
  }

  retrieveGeners(): void {
    this.generService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.geners = data;
    });
  }

  setActiveGener(gener: Gener, index: number): void {
    this.currentGener = gener;
    this.currentIndex = index;
  }
  deleteGener(currentGener: any): void {
    if (currentGener.id) {
      this.generService.delete(currentGener.id)
        .then(() => {
          this.refreshList();
        })
        .catch(err => console.log(err));
    }
  }
}
