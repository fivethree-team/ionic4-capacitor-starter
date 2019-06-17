import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';
import {
  DEVTOOLS_REDUX_CONFIG,
  LOGGER_CONFIG,
  OPTIONS_CONFIG
} from './store.config';
import { NgxsIonicRouterPluginModule } from '@fivethree/ngxs-ionic-router-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { states } from './app.state';
import { NgxsNotificationPluginModule } from '@fivethree/ngxs-notification-plugin';
import { NotificationService } from '@services/notification.service';

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forRoot(states, OPTIONS_CONFIG),
    NgxsIonicRouterPluginModule.forRoot(),
    NgxsNotificationPluginModule.forRoot(NotificationService),
    NgxsDispatchPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(DEVTOOLS_REDUX_CONFIG),
    NgxsLoggerPluginModule.forRoot(LOGGER_CONFIG)
  ],
  exports: [NgxsModule]
})
export class NgxsStoreModule {}
