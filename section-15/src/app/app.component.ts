import { Component, ViewChild, DoCheck } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck {
  @ViewChild('form', { static: true }) form: NgForm;

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit() {
    console.warn('onSubmit - form object', this.form);
  }

  ngDoCheck(): void {
    console.log(
      `[ngDoCheck] form is %c${this.form.invalid ? 'invalid' : 'valid'}`,
      `color: ${this.form.invalid ? 'red' : 'green'}; font-weight: 600;`,
      this.form.value
    );
  }
}
