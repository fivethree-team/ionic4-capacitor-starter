import { Component, OnInit } from '@angular/core';

import { Plugins } from '@capacitor/core';

const { App, BackgroundTask, LocalNotifications } = Plugins;

@Component({
  selector: 'app-background-task',
  templateUrl: './background-task.page.html',
  styleUrls: ['./background-task.page.scss']
})
export class BackgroundTaskPage implements OnInit {
  constructor() {}

  ngOnInit() {
    App.addListener('appStateChange', state => {
      if (!state.isActive) {
        // The app has become inactive. We should check if we have some work left to do, and, if so,
        // execute a background task that will allow us to finish that work before the OS
        // suspends or terminates our app:

        const taskId = BackgroundTask.beforeExit(async () => {
          // In this function We might finish an upload, let a network request
          // finish, persist some data, or perform some other task

          setTimeout(async () => {
            await this.schedule();
            // Must call in order to end our task otherwise
            // we risk our app being terminated, and possibly
            // being labled as impacting battery life
            BackgroundTask.finish({
              taskId
            });
          }, 10000); // Set a long timeout as an example
        });
      }
    });
  }

  async schedule() {
    try {
      const s = await LocalNotifications.schedule({
        notifications: [
          {
            title: 'Title',
            body: 'Hello from  background',
            id: 1,
            schedule: { at: new Date(Date.now() + 1000 * 5) },
            sound: null,
            attachments: null,
            actionTypeId: '',
            extra: null
          }
        ]
      });
      console.log(s);
    } catch (err) {
      console.log('Error in Local Notifications', err);
    }
  }
}
