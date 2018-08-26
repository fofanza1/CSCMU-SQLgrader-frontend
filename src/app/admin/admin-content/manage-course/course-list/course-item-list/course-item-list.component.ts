import {Component, OnInit, Input} from "@angular/core";
import {CoursesService} from "../../../../../service/courses/courses.service";
import {Router} from "@angular/router";

@Component({
  selector: "grader-course-item-list",
  templateUrl: "./course-item-list.component.html",
  styleUrls: ["./course-item-list.component.scss"]
})
export class CourseItemListComponent implements OnInit {
  section = "";
  errorPopup = false;
  errMsg: any;
  suc: boolean;
  loading = false;
  @Input() data;
  selectCoruse = false;
  editMode = false;
  courseCode;
  courseName;
  courseSemester;
  courseYear;
  statusCoruse;
  checkError = false;
  ccode;
  statusEntity = [
    {value: "opening", viewValue: "opening"},
    {value: "closed", viewValue: "closed"}
  ];

  terms = [
    {value: "1", viewValue: "1"}, {value: "2", viewValue: "2"},
    {value: "3", viewValue: "3"}
  ];
  constructor(private courseService: CoursesService, private router: Router) {}

  ngOnInit() {
    console.log(this.data);
    if (localStorage.getItem("adminCourseId") == this.data.cid) {
      this.selectCoruse = true;
    }
    this.courseCode = this.data.ccode;
    this.courseName = this.data.cname;
    this.courseSemester = this.data.semester;
    this.courseYear = this.data.year;
    this.statusCoruse = this.data.cstatus;
    console.log(this.courseCode);
  }

  selectCourseItem() {
    localStorage.setItem("adminCourseId", this.data.cid);
    localStorage.setItem("adminCourseObject", JSON.stringify(this.data));
    window.location.reload();
  }

  editCourse() { this.editMode = true; }

  cancelEditCourse() { this.editMode = false; }

  editCourseToBackend() {
    this.loading = true;
    this.courseService
        .updateCourse(
            this.data.cid, this.courseCode, this.courseName,
            this.courseSemester, this.courseYear, this.statusCoruse,
            this.section)
        .subscribe(
            data => {
              this.loading = false;
              this.editMode = false;
              this.suc = true;
              window.location.reload();
            },
            err => {
              this.loading = false;
              this.editMode = false;
              this.errMsg = err;
              this.errorPopup = true;
            });

    // this.courseService
  }
}
