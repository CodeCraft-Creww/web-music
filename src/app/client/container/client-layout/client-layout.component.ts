import { SongService } from 'src/app/services/song.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.scss']
})
export class ClientLayoutComponent {
  
  constructor(private songService: SongService){}
  
  ngOnInit(){
  }
}
