import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { ServersService } from '../servers.service';

interface Server {
  id: number;
  name: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class ServerResolverService implements Resolve<Server> {
  constructor(private serversService: ServersService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Server | Observable<Server> | Promise<Server> {
    const serverId: number = +route.params.id;
    return this.serversService.getServer(serverId);
  }
}
