import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { Plugins, StatusBarStyle } from '@capacitor/core';
const { SplashScreen, StatusBar } = Plugins;


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public routes = [
    { path: 'app', title: 'App' },
    { path: 'background-task', title: 'Background Task' },
    { path: 'browser', title: 'Browser' },
    { path: 'camera', title: 'Camera' },
    { path: 'device', title: 'Device' },
    { path: 'geolocation', title: 'Geolocation' },
    { path: 'keyboard', title: 'Keyboard' },
    { path: 'local-notifications', title: 'Local Notifications' },
    { path: 'network', title: 'Network' },
    { path: 'share', title: 'Share' },
  ];

  constructor(private platform: Platform, ) {
    if (this.platform.is('capacitor')) {
      SplashScreen.hide({
        fadeOutDuration: 0
      });
      StatusBar.setStyle({ style: StatusBarStyle.Dark });
      StatusBar.setBackgroundColor({
        color: '#000'
      });
    }
  }
}
