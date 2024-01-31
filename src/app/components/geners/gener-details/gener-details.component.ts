import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Gener } from 'src/app/models/gener.model';
import { GenerService } from 'src/app/services/geners.service';

@Component({
  selector: 'app-gener-details',
  templateUrl: './gener-details.component.html',
  styleUrls: ['./gener-details.component.css']
})
export class GenerDetailsComponent implements OnInit {
  @Input() gener?: Gener;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentGener: Gener = {
    name: '',
    des: '',
  };
  message = '';

  constructor(private generService: GenerService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentGener = { ...this.gener };
  }

  updatePublished(status: boolean): void {
    if (this.currentGener.id) {
      this.generService.update(this.currentGener.id, { published: status })
      .then(() => {
        this.message = 'The status was updated successfully!';
      })
      .catch(err => console.log(err));
    }
  }

  updateGener(): void {
    const data = {
      name: this.currentGener.name,
      des: this.currentGener.des
    };

    if (this.currentGener.id) {
      this.generService.update(this.currentGener.id, data)
        .then(() => this.message = 'The gener was updated successfully!')
        .catch(err => console.log(err));
    }
  }

  deleteGener(): void {
    if (this.currentGener.id) {
      this.generService.delete(this.currentGener.id)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The gener was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  }
}
