import { ThemeState, Theme } from '@store/theme/theme.state';
import { Component, Inject } from '@angular/core';

import { Platform } from '@ionic/angular';
import { Plugins, StatusBarStyle } from '@capacitor/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';
const { SplashScreen, StatusBar } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  @Select(ThemeState.theme)
  theme: Observable<Theme>;

  public routes = [
    { path: 'accessibility', title: 'Accessibility' },
    { path: 'app', title: 'App' },
    { path: 'background-task', title: 'Background Task' },
    { path: 'browser', title: 'Browser' },
    { path: 'camera', title: 'Camera' },
    { path: 'device', title: 'Device' },
    { path: 'geolocation', title: 'Geolocation' },
    { path: 'keyboard', title: 'Keyboard' },
    { path: 'local-notifications', title: 'Local Notifications' },
    { path: 'network', title: 'Network' },
    { path: 'share', title: 'Share' }
  ];

  constructor(
    private platform: Platform,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.setupTheme();
    if (this.platform.is('capacitor')) {
      SplashScreen.hide({
        fadeOutDuration: 0
      });
      StatusBar.setStyle({ style: StatusBarStyle.Dark });
      StatusBar.setBackgroundColor({
        color: '#000000'
      });
    }
  }

  setupTheme() {
    this.theme.subscribe(currentTheme => {
      this.document.body.className = currentTheme;
    });
  }
}
