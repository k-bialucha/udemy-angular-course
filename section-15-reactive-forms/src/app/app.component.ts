import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Kamil', 'admin', 'superuser'];

  get hobbyControls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      user: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.isForbiddenUsername.bind(this),
        ]),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
    });
  }

  onSubmit() {
    console.log('onSubmit:', this.signupForm.value);
  }

  addHobby() {
    const newHobby = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(newHobby);
  }

  isForbiddenUsername(control: FormControl): { [s: string]: boolean } {
    const nameLowercase = (<string>control.value || '').toLowerCase();

    const forbiddenNameFound = this.forbiddenUsernames.reduce(
      (nameFound: boolean, currentName: string) => {
        if (nameFound) return true;

        const isCurrentNameForbidden =
          nameLowercase === currentName.toLowerCase();

        return isCurrentNameForbidden;
      },
      false
    );

    if (forbiddenNameFound)
      return {
        nameIsForbidden: true,
      };

    return null;
  }
}
