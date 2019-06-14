import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { LocalNotifications } = Plugins;

@Component({
  selector: 'app-local-notifications',
  templateUrl: './local-notifications.page.html',
  styleUrls: ['./local-notifications.page.scss'],
})
export class LocalNotificationsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  async schedule() {
    try {
      const s = await LocalNotifications.schedule({
        notifications: [
          {
            title: 'Title',
            body: 'Body',
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
