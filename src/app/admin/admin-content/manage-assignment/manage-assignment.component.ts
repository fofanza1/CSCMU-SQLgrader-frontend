import { Component, OnInit } from "@angular/core";
import { AssignmentsService } from "../../../service/assignments/assignments.service";

@Component({
  selector: "grader-manage-assignment",
  templateUrl: "./manage-assignment.component.html",
  styleUrls: ["./manage-assignment.component.scss"]
})
export class ManageAssignmentComponent implements OnInit {
  allDataAssignment: Object;
  constructor(private assignmentsService: AssignmentsService) {}

  ngOnInit() {
    this.assignmentsService.getAssignemntsDetail().subscribe(data => {
      this.allDataAssignment = data;
    });
  }
}
