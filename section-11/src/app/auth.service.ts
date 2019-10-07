import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _loggedIn: boolean = false;

  public get loggedIn(): boolean {
    return this._loggedIn;
  }

  login() {
    this._loggedIn = true;
  }

  logout() {
    this._loggedIn = false;
  }
}
