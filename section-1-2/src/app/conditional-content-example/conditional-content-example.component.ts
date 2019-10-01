import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditional-content-example',
  templateUrl: './conditional-content-example.component.html',
  styleUrls: ['./conditional-content-example.component.scss'],
})
export class ConditionalContentExampleComponent implements OnInit {
  detailsVisible: boolean = false;
  clicks: string[] = [];

  constructor() {}

  ngOnInit() {}

  handleDetailsButtonClick() {
    const timestamp = new Date().toISOString();
    this.clicks = [...this.clicks, timestamp];

    this.toggleDetailsVisibility();
  }

  toggleDetailsVisibility() {
    this.detailsVisible = !this.detailsVisible;
  }
}
