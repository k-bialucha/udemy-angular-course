import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditional-content-example',
  templateUrl: './conditional-content-example.component.html',
  styleUrls: ['./conditional-content-example.component.scss'],
})
export class ConditionalContentExampleComponent implements OnInit {
  detailsVisible: boolean = false;

  constructor() {}

  ngOnInit() {}

  toggleDetailsVisibility() {
    this.detailsVisible = !this.detailsVisible;
  }
}
