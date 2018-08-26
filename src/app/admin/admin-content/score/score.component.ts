import {Component, OnInit} from "@angular/core";
import {
  AssignmentsService
} from "../../../service/assignments/assignments.service";
import {ScoresService} from "../../../service/scores/scores.service";
import {CoursesService} from "../../../service/courses/courses.service";
import * as _ from "lodash";
import {Angular5Csv} from "angular5-csv/Angular5-csv";

@Component({
  selector: "grader-score",
  templateUrl: "./score.component.html",
  styleUrls: ["./score.component.scss"]
})
export class ScoreComponent implements OnInit {
  ascore: any;
  sectionName: any;
  detail: any;
  submissionDetail: Object;
  showDetail = false;
  dataDetail: Object;
  allScore: Object;
  foods = [
    {value: "steak-0", viewValue: "Steak"},
    {value: "pizza-1", viewValue: "Pizza"},
    {value: "tacos-2", viewValue: "Tacos"}
  ];
  section;
  allDataAssignment;
  assignmentData;
  anumber = null;
  aname = null;
  arraySection = [];
  constructor(
      private assignmentService: AssignmentsService,
      private courseService: CoursesService,
      private scoreService: ScoresService) {}

  ngOnInit() {
    this.courseService.getSection(localStorage.getItem("adminCourseId"))
        .subscribe(data => {
          this.arraySection = _.range(data["numberofsection"] + 1);
          this.section = this.arraySection[0];
        });
    this.assignmentService.getAssignemntsDetail().subscribe(data => {
      this.allDataAssignment = data;
      this.assignmentData = this.allDataAssignment[0];
      this.getAllScore();
      this.getDetailLearning();
    });
  }

  getAllScore() {
    this.scoreService.getScorebyAssignmentId(this.assignmentData.aid)
        .subscribe(data => {
          this.allScore = data;
          this.anumber = this.assignmentData.anumber;
          this.aname = this.assignmentData.aname;
        });
  }

  getAllScoreBySection() {
    this.scoreService
        .getScorebyAssignmentIdAndSection(this.assignmentData.aid, this.section)
        .subscribe(data => {
          this.allScore = data;
          this.anumber = this.assignmentData.anumber;
          this.aname = this.assignmentData.aname;
        });
  }

  getDetailLearning() {
    this.scoreService.getScoreDetailbyAssignmentId(this.assignmentData.aid)
        .subscribe(data => { this.dataDetail = data; });
  }

  changeScoreAssignment(data) {
    this.getAllScore();
    this.getDetailLearning();
    this.showDetail = false;
    this.section = 0;
  }

  changeSection(data) {
    if (this.section === 0) {
      this.getAllScore();
    } else {
      this.getAllScoreBySection();
    }
  }

  clickViewDetail(data) {
    this.showDetail = true;
    this.detail = data;
    this.viewSubmissionStudent(data.studentid);
  }

  clickDownloadCSV() {
    console.log(this.assignmentData);
    this.anumber = this.assignmentData.anumber;
    this.aname = this.assignmentData.aname;
    this.sectionName = this.section === 0 ? "All Section" : this.section;
    this.ascore = this.assignmentData.totalscore;
    var options = {
      fieldSeparator: ",",
      quoteStrings: '"',
      decimalseparator: ".",
      showLabels: true,
      showTitle: true,
      title: `Assignment# ${this.anumber} : ${this.aname}, Section: ${
        this.sectionName
      } `,
      headers: ["Student Id", "Name", `Score (Max Score: ${this.ascore})`]
    };
    new Angular5Csv(
        this.allScore, `Assignment Report #${this.anumber}`, options);
  }

  viewSubmissionStudent(studentid) {
    this.scoreService.viewSubmissionStudent(studentid, this.assignmentData.aid)
        .subscribe(data => { this.submissionDetail = data; });
  }
}
