import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Plugins, AppState } from '@capacitor/core';
import { fromEvent, fromEventPattern } from 'rxjs';
const { App } = Plugins;

@Component({
  selector: 'app-app',
  templateUrl: './app.page.html',
  styleUrls: ['./app.page.scss']
})
export class AppPage implements OnInit {
  output = '';

  constructor(private change: ChangeDetectorRef) {}

  async ngOnInit() {
    App.addListener('appStateChange', (state: AppState) => {
      // state.isActive contains the active state
      console.log('App state changed. Is active?', state.isActive);
      this.output += `\n App state changed. Is active? ${state.isActive}`;
      this.change.detectChanges();
    });

    const ret = await App.getLaunchUrl();
    if (ret && ret.url) {
      console.log('App opened with URL: ' + ret.url);
      this.output += `\n App opened with URL:  ${ret.url}`;
      this.change.detectChanges();
    }

    App.addListener('appUrlOpen', (data: any) => {
      console.log('App opened with URL: ' + data.url);
      this.output += `\n App opened with URL:  ${ret.url}`;
      this.change.detectChanges();
    });

    App.addListener('appRestoredResult', (data: any) => {
      console.log('Restored state:', data);
      this.output += `\n Restored state:  ${data}`;
      this.change.detectChanges();
    });
  }
}
