import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  loggedIn: boolean;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.loggedIn = this.authService.loggedIn;

    this.authService.loginStateChanged.subscribe(() => {
      this.loggedIn = this.authService.loggedIn;
    });
  }

  goToServer(id: number) {
    this.router.navigate(['/servers', id, 'edit'], {
      queryParams: { allowEdit: '0' },
      fragment: 'nothing',
    });
  }

  onClickLogin() {
    this.authService.login();
  }

  onClickLogout() {
    this.authService.logout();
  }
}
