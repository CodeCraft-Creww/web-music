import { Component, OnInit } from '@angular/core';
import { Gener } from 'src/app/models/gener.model';
import { GenerService } from 'src/app/services/geners.service';

@Component({
  selector: 'app-add-gener',
  templateUrl: './add-gener.component.html',
  styleUrls: ['./add-gener.component.css']
})
export class AddGenerComponent implements OnInit {
  gener: Gener = new Gener();
  submitted = false;

  constructor(private generService: GenerService) { }

  ngOnInit(): void {
  }

  saveGener(): void {
    this.generService.create(this.gener).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  newGener(): void {
    this.submitted = false;
    this.gener = new Gener();
  }
}
