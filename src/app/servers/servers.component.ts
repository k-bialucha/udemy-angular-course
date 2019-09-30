import { Component, OnInit } from '@angular/core';

interface ComponentState {
  allowNewServer: boolean;
  serverCreated: boolean;
  serverCreationStatus: string;
  serverName: string;
}

const initialState: ComponentState = {
  allowNewServer: false,
  serverCreated: false,
  serverCreationStatus: 'waiting for server to be added...',
  serverName: 'my server',
};

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent implements OnInit {
  allowNewSever: boolean = initialState.allowNewServer;
  serverCreated: boolean = initialState.serverCreated;
  serverCreationStatus: string = initialState.serverCreationStatus;
  serverName: string = initialState.serverName;

  constructor() {
    setTimeout(() => {
      this.allowNewSever = true;
    }, 2000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreationStatus = `Server >>${this.serverName}<< was created!`;
    this.allowNewSever = false;
    this.serverCreated = true;

    setTimeout(() => {
      this.allowNewSever = true;
      this.serverCreated = initialState.serverCreated;
      this.serverCreationStatus = initialState.serverCreationStatus;
      this.serverName = initialState.serverName;
    }, 2000);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
