import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('loginForm', { static: true }) loginForm: NgForm;

  ngOnInit(): void {
    console.warn('INIT:', this.loginForm);
  }
}
