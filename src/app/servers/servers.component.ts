import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `
    <p>
      <app-server></app-server>
      <app-server></app-server>
    </p>
  `,
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
