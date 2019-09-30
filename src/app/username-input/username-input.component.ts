import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-input',
  templateUrl: './username-input.component.html',
  styleUrls: ['./username-input.component.scss'],
})
export class UsernameInputComponent implements OnInit {
  username: string = 'admin';
  constructor() {}

  ngOnInit() {}
}
