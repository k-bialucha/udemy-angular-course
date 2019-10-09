import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  form: FormGroup;
  statuses = ['stable', 'critical', 'finished'];

  ngOnInit() {
    this.form = new FormGroup({
      projectName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      projectStatus: new FormControl(this.statuses[1]),
    });

    this.form.valueChanges.subscribe(value => {
      console.log('form value update', value);
    });
  }
}
