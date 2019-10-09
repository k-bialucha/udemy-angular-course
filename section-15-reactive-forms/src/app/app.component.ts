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

  get hobbyControls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      user: new FormGroup({
        username: new FormControl(null, Validators.required),
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
}
