import { Component, OnInit } from "@angular/core";
import { AssignmentsService } from "../../../../service/assignments/assignments.service";
import { Router } from "@angular/router";

@Component({
  selector: "grader-manage-sub-assignment",
  templateUrl: "./manage-sub-assignment.component.html",
  styleUrls: ["./manage-sub-assignment.component.scss"]
})
export class ManageSubAssignmentComponent implements OnInit {
  allDataAssignment: Object;
  searchText: String;
  constructor(
    private assignmentsService: AssignmentsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.assignmentsService.getAssignemntsDetail().subscribe(data => {
      this.allDataAssignment = data;
      console.log(this.allDataAssignment);
    });
  }

  goToQuestion(assignmentNumber) {
    this.router.navigate([
      "/admin/manageassignment/assignmentlist/" + assignmentNumber
    ]);
  }
}
