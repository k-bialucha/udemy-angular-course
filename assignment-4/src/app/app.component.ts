import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onNumberEmitted(number: number) {
    const isEven = number % 2 === 0;

    if (isEven) {
      this.evenNumbers.unshift(number);
    } else {
      this.oddNumbers.unshift(number);
    }
  }
}
