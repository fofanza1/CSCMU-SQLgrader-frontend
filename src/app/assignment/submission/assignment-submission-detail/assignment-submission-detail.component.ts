import { Component, OnInit, Input, OnChanges } from "@angular/core";
import * as moment from "moment";

@Component({
  selector: "grader-assignment-submission-detail",
  templateUrl: "./assignment-submission-detail.component.html",
  styleUrls: ["./assignment-submission-detail.component.scss"]
})
export class AssignmentSubmissionDetailComponent implements OnInit, OnChanges {
  duein: string;
  duedate: any;
  startdate: any;
  @Input() data;
  constructor() {}

  ngOnInit() {
    console.log(this.data);
    // this.duedate = this.data.startdate;
  }

  ngOnChanges() {
    this.startdate = moment(this.data.startdate).format(
      "DD MMMM YYYY, HH:mm:ss"
    );
    this.duedate = moment(this.data.duedate).format("DD MMMM YYYY, HH:mm:ss");
    this.duein = moment(this.data.duedate).fromNow();
  }
}
