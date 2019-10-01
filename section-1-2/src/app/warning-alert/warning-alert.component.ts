import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styles: [
    `
      .WarningAlert--title {
        font-weight: 600;
        color: orangered;
      }
    `,
  ],
})
export class WarningAlertComponent {
  title: string = 'some warning';
  message: string = 'something worth warning happened';
}
