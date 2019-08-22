import { Component, OnInit } from '@angular/core';
import { Plugins, NetworkStatus } from '@capacitor/core';
import { bindCallback } from 'rxjs';
import { tap } from 'rxjs/operators';

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


    const callback = bindCallback(Network.addListener);
    callback('networkStatusChange')
      .pipe(tap(ev => (this.status = ev[0])))
      .subscribe();
  }
}
