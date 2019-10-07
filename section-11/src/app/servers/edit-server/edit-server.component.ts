import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: { id: number; name: string; status: string };

  serverName = '';
  serverStatus = '';

  allowEdit: boolean = false;
  changesSaved: boolean = false;

  constructor(
    private serversService: ServersService,
    private currentRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;

    this.currentRoute.queryParams.subscribe((params: Params) => {
      this.allowEdit = params.allowEdit === '1';
    });
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.currentRoute });
  }

  canDeactivate(): boolean {
    if (!this.allowEdit) return true;

    const somethingChanged =
      this.serverName !== this.server.name ||
      this.serverStatus !== this.server.status;

    if (somethingChanged && !this.changesSaved) return this.askForLeave();

    return true;
  }

  askForLeave(): boolean {
    const userConfirmed = confirm(
      'Changes were made to the server. Do you want to leave??'
    );

    return userConfirmed;
  }
}
