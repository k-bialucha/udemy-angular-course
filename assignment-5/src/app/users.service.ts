import { EventEmitter, Injectable } from '@angular/core';
import { UpdateCounterService } from './update-counter.service';

type UserList = string[];

@Injectable()
export class UsersService {
  activeUsers: UserList = ['Max', 'Anna'];
  inactiveUsers: UserList = ['Chris', 'Manu'];

  public subscribeToUpdates: (handler: () => any) => void;

  constructor(private counterService: UpdateCounterService) {}

  setActiveToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);

    this.counterService.incrementActiveToInactiveCount();
  }

  setInactiveToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);

    this.counterService.incrementInactiveToActiveCount();
  }
}
