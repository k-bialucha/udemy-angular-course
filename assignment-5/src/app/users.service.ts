import { EventEmitter } from '@angular/core';

type UserList = string[];

export class UsersService {
  activeUsers: UserList = ['Max', 'Anna'];
  inactiveUsers: UserList = ['Chris', 'Manu'];

  private usersUpdateEmitter: EventEmitter<void> = new EventEmitter<void>();

  public subscribeToUpdates: (handler: () => any) => void;

  constructor() {
    this.subscribeToUpdates = handler => {
      this.usersUpdateEmitter.subscribe(handler);
    };
  }

  setActiveToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);

    this.notifyAfterUpdate();
  }

  setInactiveToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);

    this.notifyAfterUpdate();
  }

  private notifyAfterUpdate() {
    this.usersUpdateEmitter.emit();
  }
}
