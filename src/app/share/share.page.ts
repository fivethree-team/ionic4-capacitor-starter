import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Share } = Plugins;

@Component({
  selector: 'app-share',
  templateUrl: './share.page.html',
  styleUrls: ['./share.page.scss']
})
export class SharePage implements OnInit {
  constructor() {}

  ngOnInit() {}

  async share() {
    try {
      const ret = await Share.share({
        title: 'See cool stuff',
        text: 'Really awesome thing you need to see right meow',
        url: 'https://github.com/fivethree-team',
        dialogTitle: 'Share with buddies'
      });
      console.log(ret);
    } catch (err) {
      console.log('Error using Share API', err);
    }
  }
}
