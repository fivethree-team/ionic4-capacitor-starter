import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { YoutubePlayerWeb } from 'capacitor-youtube-player';
const { YoutubePlayer } = Plugins;

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.page.html',
  styleUrls: ['./youtube.page.scss']
})
export class YoutubePage implements OnInit {
  testVideoID = 'meXd3FITV-Y';

  constructor() {}

  ngOnInit() {}

  async testNativeYoutubePlayerPlugin() {
    const options = { width: 640, height: 360, videoId: this.testVideoID };
    const playerReady = await YoutubePlayer.initialize(options);
  }

  async testWebYoutubePlayerPlugin() {
    const options = {
      playerId: 'video',
      playerSize: { width: 640, height: 360 },
      videoId: this.testVideoID
    };
    const result = await YoutubePlayerWeb.initialize(options);
  }
}
