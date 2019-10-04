import { Component, OnInit } from '@angular/core';

import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent implements OnInit {
  constructor(
    private accountsService: AccountsService // private loggingService: LoggingService
  ) {}

  ngOnInit() {
    this.accountsService.statusUpdatedEmitter.subscribe((status: string) => {
      alert('New status: ' + status);
    });
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);

    // this.loggingService.logStatusChange(accountStatus);
  }
}
