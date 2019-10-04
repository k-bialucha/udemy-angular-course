import { EventEmitter, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UpdateCounterService {
  private _activeToInactiveCount: number = 0;
  private _inactiveToActiveCount: number = 0;

  public get activeToInactiveCount(): number {
    return this._activeToInactiveCount;
  }
  public get inactiveToActiveCount(): number {
    return this._inactiveToActiveCount;
  }

  private countersUpdatedEmitter: EventEmitter<void> = new EventEmitter();
  public countersUpdated;

  constructor() {
    this.countersUpdated = (handler: () => any) => {
      this.countersUpdatedEmitter.subscribe(handler);
    };
  }

  incrementInactiveToActiveCount() {
    ++this._inactiveToActiveCount;

    this.countersUpdatedEmitter.emit();
  }

  incrementActiveToInactiveCount() {
    ++this._activeToInactiveCount;

    this.countersUpdatedEmitter.emit();
  }
}
