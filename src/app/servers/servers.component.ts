import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent implements OnInit {
  allowNewSever: boolean = false;

  constructor() {
    setTimeout(() => {
      this.allowNewSever = true;
    }, 2000);
  }

  ngOnInit() {}
}
