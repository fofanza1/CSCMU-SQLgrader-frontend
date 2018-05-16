import { Component, OnInit } from "@angular/core";
import { TasksService } from "../../service/tasks/tasks.service";
import { Router } from "@angular/router";

@Component({
  selector: "grader-assignment-list",
  templateUrl: "./assignment-list.component.html",
  styleUrls: ["./assignment-list.component.scss"]
})
export class AssignmentListComponent implements OnInit {
  cid: number;
  assignmentList;
  constructor(private taskService: TasksService, private router: Router) {}
  searchAssignment = "";
  ngOnInit() {
    this.assignmentListTaskLoad();
  }

  assignmentListTaskLoad() {
    this.cid = parseInt(localStorage.getItem("courseId"));
    this.taskService.assignmentListTask(this.cid).subscribe(data => {
      this.assignmentList = data["data"];
      // console.log(data);
      console.log(this.assignmentList);
    });
  }

  goToAssignment(anumber) {
    this.router.navigate(["home/assignment/" + anumber]);
  }
}
