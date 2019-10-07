import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _loggedIn: boolean = false;

  public get loggedIn(): boolean {
    return this._loggedIn;
  }

  loginStateChanged: EventEmitter<void> = new EventEmitter();

  isAuthenticated(): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.loggedIn), 800);
    });
  }

  login() {
    this._loggedIn = true;
    this.loginStateChanged.emit();
  }

  logout() {
    this._loggedIn = false;
    this.loginStateChanged.emit();
  }
}
