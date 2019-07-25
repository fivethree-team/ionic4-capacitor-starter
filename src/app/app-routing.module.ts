import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'app', loadChildren: () => import('./app/app.module').then(m => m.AppPageModule) },
  {
    path: 'background-task',
    loadChildren:
      () => import('./background-task/background-task.module').then(m => m.BackgroundTaskPageModule)
  },
  {
    path: 'browser',
    loadChildren: () => import('./browser/browser.module').then(m => m.BrowserPageModule)
  },
  { path: 'camera', loadChildren: () => import('./camera/camera.module').then(m => m.CameraPageModule) },
  { path: 'device', loadChildren: () => import('./device/device.module').then(m => m.DevicePageModule) },
  {
    path: 'geolocation',
    loadChildren: () => import('./geolocation/geolocation.module').then(m => m.GeolocationPageModule)
  },
  {
    path: 'keyboard',
    loadChildren: () => import('./keyboard/keyboard.module').then(m => m.KeyboardPageModule)
  },
  {
    path: 'local-notifications',
    loadChildren:
      () => import('./local-notifications/local-notifications.module').then(m => m.LocalNotificationsPageModule)
  },
  {
    path: 'network',
    loadChildren: () => import('./network/network.module').then(m => m.NetworkPageModule)
  },
  { path: 'share', loadChildren: () => import('./share/share.module').then(m => m.SharePageModule) },
  {
    path: 'accessibility',
    loadChildren: () => import('./accessibility/accessibility.module').then(m => m.AccessibilityPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
