import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
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
    console.log(this.loginForm.value);
  }

  handleSubmit() {
    console.log('Submit form:', this.loginForm.value);
  }
}
