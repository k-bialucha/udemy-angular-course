import { Component, OnInit } from '@angular/core';

import { UsersService } from './users.service';
import { UpdateCounterService } from './update-counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService],
})
export class AppComponent implements OnInit {
  activeToInactiveCount;
  inactiveToActiveCount;

  constructor(private countersService: UpdateCounterService) {}

  ngOnInit(): void {
    this.updateCounters();
    this.countersService.countersUpdated(() => this.updateCounters());
  }

  private updateCounters() {
    this.activeToInactiveCount = this.countersService.activeToInactiveCount;
    this.inactiveToActiveCount = this.countersService.inactiveToActiveCount;
  }
}
