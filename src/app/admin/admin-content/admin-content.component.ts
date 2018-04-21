import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "grader-admin-content",
  templateUrl: "./admin-content.component.html",
  styleUrls: ["./admin-content.component.scss"]
})
export class AdminContentComponent implements OnInit {
  coruseData: any;
  constructor(private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem("adminCourseObject")) {
      this.coruseData = JSON.parse(localStorage.getItem("adminCourseObject"));
      console.log(this.coruseData);
    } else {
      this.router.navigate["admin/managecourse/courselist"];
    }
  }
}
