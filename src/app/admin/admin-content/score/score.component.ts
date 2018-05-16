import { Component, OnInit } from "@angular/core";
import { AssignmentsService } from "../../../service/assignments/assignments.service";
import { ScoresService } from "../../../service/scores/scores.service";

@Component({
  selector: "grader-score",
  templateUrl: "./score.component.html",
  styleUrls: ["./score.component.scss"]
})
export class ScoreComponent implements OnInit {
  detail: any;
  submissionDetail: Object;
  showDetail = false;
  dataDetail: Object;
  allScore: Object;
  foods = [
    { value: "steak-0", viewValue: "Steak" },
    { value: "pizza-1", viewValue: "Pizza" },
    { value: "tacos-2", viewValue: "Tacos" }
  ];
  allDataAssignment;
  assignmentData;
  constructor(
    private assignmentService: AssignmentsService,
    private scoreService: ScoresService
  ) {}

  ngOnInit() {
    this.assignmentService.getAssignemntsDetail().subscribe(data => {
      this.allDataAssignment = data;
      this.assignmentData = this.allDataAssignment[0];
      this.getAllScore();
      this.getDetailLearning();
    });
  }

  getAllScore() {
    this.scoreService
      .getScorebyAssignmentId(this.assignmentData.aid)
      .subscribe(data => {
        this.allScore = data;
        console.log(this.assignmentData.aid);
      });
  }

  getDetailLearning() {
    this.scoreService
      .getScoreDetailbyAssignmentId(this.assignmentData.aid)
      .subscribe(data => {
        this.dataDetail = data;
      });
  }

  changeScoreAssignment(data) {
    this.getAllScore();
    this.getDetailLearning();
    this.showDetail = false;
  }

  clickViewDetail(data) {
    this.showDetail = true;
    this.detail = data;
    this.viewSubmissionStudent(data.studentid);
  }

  viewSubmissionStudent(studentid) {
    this.scoreService
      .viewSubmissionStudent(studentid, this.assignmentData.aid)
      .subscribe(data => {
        this.submissionDetail = data;
      });
  }
}
