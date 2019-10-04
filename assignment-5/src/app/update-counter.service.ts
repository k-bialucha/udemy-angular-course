import { EventEmitter } from '@angular/core';

export class UpdateCounterService {
  inactiveToActiveCount: number = 0;
  activeToInactiveCount: number = 0;

  private countersUpdatedEmitter: EventEmitter<void> = new EventEmitter();
  public countersUpdated;

  constructor() {
    this.countersUpdated = handler => {
      this.countersUpdatedEmitter.subscribe(handler);
    };
  }

  incrementInactiveToActiveCount() {
    ++this.inactiveToActiveCount;

    this.countersUpdatedEmitter.emit();
  }

  incrementActiveToInactiveCount() {
    ++this.activeToInactiveCount;

    this.countersUpdatedEmitter.emit();
  }
}
