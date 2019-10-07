import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private observableSubscription: Subscription;
  causeError = false;

  constructor() {}

  ngOnInit() {
    const customObservable = Observable.create(observer => {
      let count = 0;

      setInterval(() => {
        if (this.causeError && count > 3)
          observer.error(new Error('Bad error. Count exceeded 5!'));

        if (count >= 5) observer.complete();

        observer.next(++count);
      }, 1000);
    });

    const customObservableWithPipe = customObservable.pipe(
      map((count: number) => `round: ${count + 1}`)
    );

    this.observableSubscription = customObservableWithPipe.subscribe(
      count => {
        console.log('interval - count:', count);
      },
      error => {
        alert(`Observable error: \n${error.message}`);
      },
      () => {
        console.warn('observable completed!');
      }
    );
  }

  ngOnDestroy(): void {
    console.warn('will unsubscribe:', this.observableSubscription);
    this.observableSubscription.unsubscribe();
  }

  enableCauseError() {
    this.causeError = true;
  }
}
