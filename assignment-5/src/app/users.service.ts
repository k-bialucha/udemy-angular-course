import { EventEmitter, Injectable } from '@angular/core';
import { UpdateCounterService } from './update-counter.service';

type UserList = string[];

@Injectable()
export class UsersService {
  activeUsers: UserList = ['Max', 'Anna'];
  inactiveUsers: UserList = ['Chris', 'Manu'];

  private usersUpdateEmitter: EventEmitter<void> = new EventEmitter<void>();

  public subscribeToUpdates: (handler: () => any) => void;

  constructor(private counterService: UpdateCounterService) {
    this.subscribeToUpdates = handler => {
      this.usersUpdateEmitter.subscribe(handler);
    };
  }

  setActiveToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);

    this.notifyAfterUpdate();
    this.counterService.incrementActiveToInactiveCount();
  }

  setInactiveToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);

    this.notifyAfterUpdate();
    this.counterService.incrementInactiveToActiveCount();
  }

  private notifyAfterUpdate() {
    this.usersUpdateEmitter.emit();
  }
}
