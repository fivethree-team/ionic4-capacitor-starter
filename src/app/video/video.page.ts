import { Component, OnInit } from '@angular/core';
import { CapacitorVideoPlayer } from 'capacitor-video-player';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss']
})
export class VideoPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  async playVideo() {
    const videoPlayer: any = CapacitorVideoPlayer;
    const url = 'http://localhost:5000/sj.mp4';
    const res: any = await videoPlayer.play({ url: url });
    console.log('result of echo ', res);
  }
}
