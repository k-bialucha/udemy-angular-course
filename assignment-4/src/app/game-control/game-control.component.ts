import { Component, OnInit, Output, EventEmitter } from '@angular/core';

const EMIT_INTERVAL = 300;

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output('newNumberEmitted') numberEmitter: EventEmitter<
    number
  > = new EventEmitter();
  currentNumber: number = 0;
  intervalId: number = null;

  constructor() {}

  ngOnInit() {}

  onStart() {
    this.emitCurrentNumber();

    this.intervalId = window.setInterval(() => {
      this.currentNumber++;
      this.emitCurrentNumber();
    }, EMIT_INTERVAL);
  }

  onStop() {
    window.clearInterval(this.intervalId);
    this.intervalId = null;
    this.currentNumber = 0;
  }

  emitCurrentNumber() {
    this.numberEmitter.emit(this.currentNumber);
  }
}
