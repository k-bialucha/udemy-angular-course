import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.updateServer(this.route.snapshot.params);

    this.route.params.subscribe((params: Params) => {
      this.updateServer(params);
    });
  }

  updateServer(params: Params) {
    const { id } = params;

    this.server = this.serversService.getServer(+id);
  }
}
