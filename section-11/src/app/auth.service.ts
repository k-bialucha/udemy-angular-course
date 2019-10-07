import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _loggedIn: boolean = false;

  public get loggedIn(): boolean {
    return this._loggedIn;
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.loggedIn), 800);
    });
  }

  login() {
    this._loggedIn = true;
  }

  logout() {
    this._loggedIn = false;
  }
}
