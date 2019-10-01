import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
})
export class AssignmentsComponent implements OnInit {
  showAssignments: boolean = false;

  constructor() {}

  ngOnInit() {}

  toggleShowAssignments() {
    this.showAssignments = !this.showAssignments;
  }
}
