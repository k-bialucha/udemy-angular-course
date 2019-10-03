import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4, 6];

  onlyOdd = false;

  switchValue = 1;

  ngOnInit() {
    setTimeout(() => {
      this.switchValue = 10;
    }, 3000);
    setTimeout(() => {
      this.switchValue = 999;
    }, 5000);
  }
}
