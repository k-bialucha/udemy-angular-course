import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';

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
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', { static: true })
  serverContentInput: ElementRef;

  @Output('srvCreated') serverCreated = new EventEmitter<EventData>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<EventData>();

  constructor() {}

  ngOnInit() {}

  onAddServer(serverNameInput: HTMLInputElement) {
    const newServerName = serverNameInput.value;
    const newServerContent = this.serverContentInput.nativeElement.value;

    this.serverCreated.emit({
      serverName: newServerName,
      serverContent: newServerContent,
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    const newServerName = serverNameInput.value;
    const newServerContent = this.serverContentInput.nativeElement.value;

    this.blueprintCreated.emit({
      serverName: newServerName,
      serverContent: newServerContent,
    });
  }
}
