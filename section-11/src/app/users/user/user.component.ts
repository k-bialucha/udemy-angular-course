import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: { id: number; name: string };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.updateUserData(this.route.snapshot);

    this.route.params.subscribe((params: Params) => {
      this.updateUserData(params);
    });
  }

  updateUserData(params: Params) {
    const { id, name } = params;

    this.user = {
      id,
      name,
    };
  }
}
