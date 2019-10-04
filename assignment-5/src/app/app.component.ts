import { Component, OnInit } from '@angular/core';

import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService],
})
export class AppComponent implements OnInit {
  activeUsers;
  inactiveUsers;

  constructor(private usersService: UsersService) {
    this.activeUsers = usersService.activeUsers;
    this.inactiveUsers = usersService.inactiveUsers;
  }

  ngOnInit(): void {
    this.usersService.subscribeToUpdates(() => {
      this.activeUsers = this.usersService.activeUsers;
      this.inactiveUsers = this.usersService.inactiveUsers;
    });
  }
}
