import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "grader-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"]
})
export class AdminComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    if (!localStorage.getItem("adminCourseObject")) {
      this.router.navigate(["admin/managecourse/courselist"]);
    }
  }
}
