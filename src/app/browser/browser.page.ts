import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;

@Component({
  selector: 'app-browser',
  templateUrl: './browser.page.html',
  styleUrls: ['./browser.page.scss']
})
export class BrowserPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  async openURL() {
    try {
      await Browser.open({
        url: 'https://github.com/fivethree-team',
        presentationStyle: 'fullscreen',
        toolbarColor: '#000',
        windowName: 'fivethree on GitHub'
      });
      console.log('browser opened');
    } catch (err) {
      console.log('Error opening browser: ', err);
    }
  }
}
