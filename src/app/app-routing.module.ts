import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'app', loadChildren: './app/app.module#AppPageModule' },
  {
    path: 'background-task',
    loadChildren:
      './background-task/background-task.module#BackgroundTaskPageModule'
  },
  {
    path: 'browser',
    loadChildren: './browser/browser.module#BrowserPageModule'
  },
  { path: 'camera', loadChildren: './camera/camera.module#CameraPageModule' },
  { path: 'device', loadChildren: './device/device.module#DevicePageModule' },
  {
    path: 'geolocation',
    loadChildren: './geolocation/geolocation.module#GeolocationPageModule'
  },
  {
    path: 'keyboard',
    loadChildren: './keyboard/keyboard.module#KeyboardPageModule'
  },
  {
    path: 'local-notifications',
    loadChildren:
      './local-notifications/local-notifications.module#LocalNotificationsPageModule'
  },
  {
    path: 'network',
    loadChildren: './network/network.module#NetworkPageModule'
  },
  { path: 'share', loadChildren: './share/share.module#SharePageModule' },
  {
    path: 'accessibility',
    loadChildren: './accessibility/accessibility.module#AccessibilityPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
