import { Component, OnInit } from '@angular/core';
import { Plugins, NetworkStatus } from '@capacitor/core';

const { Network } = Plugins;

@Component({
  selector: 'app-network',
  templateUrl: './network.page.html',
  styleUrls: ['./network.page.scss']
})
export class NetworkPage implements OnInit {
  status: NetworkStatus;

  constructor() {}

  async ngOnInit() {
    this.status = await Network.getStatus();

    Network.addListener('networkStatusChange', status => {
      console.log('Network status changed', status);
      this.status = status;
    });
  }
}
