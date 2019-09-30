import { Component } from '@angular/core';

enum ServerStatus {
  OFFLINE = 'offline',
  ONLINE = 'online',
}

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverId: number = 11;
  serverStatus: ServerStatus = ServerStatus.ONLINE;

  constructor() {
    this.serverStatus =
      Math.random() > 0.5 ? ServerStatus.ONLINE : ServerStatus.OFFLINE;
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor(): string {
    if (this.serverStatus === ServerStatus.ONLINE) return 'green';

    return 'red';
  }
}
