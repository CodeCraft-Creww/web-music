import { Component, Input } from '@angular/core';
import { MyPlaylistService } from 'src/app/services/my-playlist.service';

@Component({
  selector: 'app-audio-mysong',
  templateUrl: './audio-mysong.component.html',
  styleUrls: ['./audio-mysong.component.scss']
})
export class AudioMysongComponent {
  @Input() selectedSong: any;
  isFavorite: boolean[] = [];

  constructor(private playlistService: MyPlaylistService) { }
  
  
}
