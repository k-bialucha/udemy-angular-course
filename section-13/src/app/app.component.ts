import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  isActivated = false;
  private _subscription: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this._subscription = this.userService.activatedSubject.subscribe(
      isActivated => {
        this.isActivated = isActivated;
      }
    );
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
