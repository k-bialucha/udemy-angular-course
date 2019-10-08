import { Component, ViewChild, DoCheck } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck {
  @ViewChild('form', { static: true }) form: NgForm;
  defaultQuestion: string = 'pet';
  questionAnswer: string = 'type sth...';
  genders: string[] = ['other', 'female', 'male'];

  user: {
    username: string;
    email: string;
    secretQuestion: string;
    questionAnswer: string;
    gender: string;
  } = null;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.form.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '...'
    //   },
    //  requires typing every form value
    // });
    this.form.form.patchValue({
      userData: { username: suggestedName },
    });
  }

  onSubmit() {
    console.warn('onSubmit - form object', this.form);

    const userData = {
      username: this.form.value.userData.username,
      email: this.form.value.userData.email,
      secretQuestion: this.form.value.secret,
      questionAnswer: this.form.value.questionAnswer,
      gender: this.form.value.gender,
    };

    this.user = userData;
  }

  ngDoCheck(): void {
    console.log(
      `[ngDoCheck] form is %c${this.form.invalid ? 'invalid' : 'valid'}`,
      `color: ${this.form.invalid ? 'red' : 'green'}; font-weight: 600;`,
      this.form.value
    );
  }
}
