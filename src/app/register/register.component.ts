import {Component, OnInit} from "@angular/core";
import {CoursesService} from "../service/courses/courses.service";
import {StudentsService} from "../service/students/students.service";
import {Router} from "@angular/router";
import * as _ from "lodash";

@Component({
  selector: "grader-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  sucCheck = false;
  openingCourse: Object;
  courseData;
  username;
  fullname;
  password;
  repassword;
  studentcode;
  boolPassword = false;
  errCheck = false;
  sectionData;
  section = [];
  constructor(
      private courseService: CoursesService,
      private studentService: StudentsService, private router: Router) {}

  ngOnInit() {
    this.courseService.getOpeningCourse().subscribe(data => {
      this.openingCourse = data;
      console.log(data);
    });
  }

  register() {
    this.studentService
        .register(
            this.password, this.studentcode, this.fullname, this.courseData,
            this.sectionData)
        .subscribe(
            data => {
              this.errCheck = false;
              console.log(data);
              this.username = "";
              this.password = "";
              this.studentcode = "";
              this.fullname = "";
              this.repassword = "";
              this.sucCheck = true;
              setTimeout(() => { this.router.navigate(["/login"]); }, 3000);
            },
            err => {
              this.sucCheck = false;
              this.errCheck = true;
            });
  }

  checkPassword(data) {
    if (this.password !== this.repassword) {
      this.boolPassword = true;
    } else {
      this.boolPassword = false;
    }
  }

  courseChange(data) {
    console.log("eiei");
    this.courseService.getSection(this.courseData).subscribe(data => {
      this.section = _.range(1, data["numberofsection"] + 1);
      console.log(this.section);
      // this.section = this.section[0];
    });
  }
}
