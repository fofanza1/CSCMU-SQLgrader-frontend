import { Component, OnInit } from "@angular/core";
import { CoursesService } from "../../../../service/courses/courses.service";

@Component({
  selector: "grader-course-list",
  templateUrl: "./course-list.component.html",
  styleUrls: ["./course-list.component.scss"]
})
export class CourseListComponent implements OnInit {
  errExist: boolean;
  showMsg: boolean;
  allDataCourse: Object;
  constructor(private courseService: CoursesService) {}

  ngOnInit() {
    if (localStorage.getItem("adminCourseId")) {
      this.showMsg = false;
    } else {
      this.showMsg = true;
    }
    this.courseService.getAllCourse().subscribe(data => {
      this.allDataCourse = data;
      console.log(this.allDataCourse);
      console.log(data);
    },err => {
      this.errExist = true;
    });
  }
}
