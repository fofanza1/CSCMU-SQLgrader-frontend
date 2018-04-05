import { Component, OnInit } from "@angular/core";

@Component({
  selector: "grader-create-course",
  templateUrl: "./create-course.component.html",
  styleUrls: ["./create-course.component.scss"]
})
export class CreateCourseComponent implements OnInit {
  terms = [
    { value: 1, viewValue: "1" },
    { value: 2, viewValue: "2" },
    { value: 3, viewValue: "3" }
  ];
  constructor() {}

  ngOnInit() {}
}
