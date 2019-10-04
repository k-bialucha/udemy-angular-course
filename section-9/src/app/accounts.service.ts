import { Injectable, EventEmitter } from '@angular/core';

import { LoggingService } from './logging.service';

type VoidFunctionType = (handler: (status: string) => void) => void;

@Injectable()
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  private statusUpdatedEmitter = new EventEmitter<string>();
  public subscribeToStatusUpdates: VoidFunctionType;

  constructor(private loggingService: LoggingService) {
    this.subscribeToStatusUpdates = handler => {
      this.statusUpdatedEmitter.subscribe(handler);
    };
  }

  addAccount(name: string, status: string) {
    this.accounts.push({ name, status });

    this.loggingService.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.statusUpdatedEmitter.emit(status);

    this.loggingService.logStatusChange(status);
  }
}
