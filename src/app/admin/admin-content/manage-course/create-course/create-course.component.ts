import { Component, OnInit } from "@angular/core";
import { CoursesService } from "../../../../service/courses/courses.service";
import { HAMMER_GESTURE_CONFIG } from "@angular/platform-browser";
import { Router } from "@angular/router";

@Component({
  selector: "grader-create-course",
  templateUrl: "./create-course.component.html",
  styleUrls: ["./create-course.component.scss"]
})
export class CreateCourseComponent implements OnInit {
  suc = true;
  err = false;
  showSuccessful = false;
  loading = false;
  ccode = "";
  cname = "";
  termData;
  year;
  terms = [
    { value: "1", viewValue: "1" },
    { value: "2", viewValue: "2" },
    { value: "3", viewValue: "3" }
  ];
  constructor(private courseService: CoursesService, private router: Router) {}
  ngOnInit() {}

  createCourse() {
    // console.log(this.ccode, this.cname, this.termData, this.year);
    this.loading = true;
    this.courseService
      .createCourse(this.ccode, this.cname, this.termData, this.year, "opening")
      .subscribe(
        data => {
          this.loading = false;
          this.showSuccessful = true;
          this.err = false;
          localStorage.setItem("adminCourseId", data["data"][0].cid);
          localStorage.setItem("adminCourseObject", JSON.stringify(data["data"]));
          setTimeout(() => {
            this.router.navigate(["admin/managecourse/courselist"]);
          }, 1000);
          console.log(data);
        },
        error => {
          this.err = true;
          this.suc = false;
          this.loading = false;
          console.log(error);
        }
      );
  }
}
