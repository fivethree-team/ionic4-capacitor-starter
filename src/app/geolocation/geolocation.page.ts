import { Component, OnInit } from '@angular/core';
import { Plugins, GeolocationPosition } from '@capacitor/core';

const { Geolocation } = Plugins;

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss']
})
export class GeolocationPage implements OnInit {
  coordinates: GeolocationPosition;

  constructor() {}

  async ngOnInit() {
    console.log('get initial geolocation');
    await this.getCurrentPosition();
  }

  async getCurrentPosition() {
    try {
      this.coordinates = await Geolocation.getCurrentPosition();
    } catch (err) {
      console.log('Error getting current position', err);
    }
  }

  watchPosition() {
    const wait = Geolocation.watchPosition({}, (position, err) => {
      if (!err) {
        console.log('coordinates updated', position);
        this.coordinates = position;
      } else {
        console.log('Error watching for Geolocation', err);
      }
    });
  }
}
