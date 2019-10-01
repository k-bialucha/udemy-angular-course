import { Component, OnInit, EventEmitter, Output } from '@angular/core';

type EventData = {
  serverName: string;
  serverContent: string;
};

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';

  @Output('srvCreated') serverCreated = new EventEmitter<EventData>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<EventData>();

  constructor() {}

  ngOnInit() {}

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }
}
