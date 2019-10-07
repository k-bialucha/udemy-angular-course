import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private observableSubscription: Subscription;
  constructor() {}

  ngOnInit() {
    this.observableSubscription = interval(1000).subscribe(count => {
      console.log('interval - count:', count);
    });
  }

  ngOnDestroy(): void {
    console.warn('will unsubscribe:', this.observableSubscription);
    this.observableSubscription.unsubscribe();
  }
}
