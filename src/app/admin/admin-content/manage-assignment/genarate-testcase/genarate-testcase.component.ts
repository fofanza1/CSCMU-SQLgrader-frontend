import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { AssignmentsService } from "../../../../service/assignments/assignments.service";
import { Subscription } from "rxjs";

@Component({
  selector: "grader-genarate-testcase",
  templateUrl: "./genarate-testcase.component.html",
  styleUrls: ["./genarate-testcase.component.scss"]
})
export class GenarateTestcaseComponent implements OnInit {
  getQuestion$: Subscription;
  getAssignment$: Subscription;
  allDataQuestion: any;
  checktSelectQuestion = false;
  dataQuestion: Object;
  dataUpdate = {
    anumber: null,
    qnumber: null,
    qid: null,
    qdescription: null,
    solution: null,
    score: 0,
    answer: null
  };
  noofquestionArr = [];
  id$: any;
  dataTest = { eiei: "eiei" };
  dataAssigment = {
    aname: null,
    anumber: null,
    noofquestion: null,
    startdate: null,
    duedate: null,
    dbid: null,
    totalscore: 0
  };
  constructor(
    private route: ActivatedRoute,
    private assignmentsService: AssignmentsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(async params => {
      this.id$ = params.id;
      this.getDetail();
    });
  }

  async getDetail() {
    this.getAssignment$ = await this.assignmentsService
      .getAssignemntsDetailById(this.id$)
      .subscribe(
        data => {
          console.log(data);
          this.dataAssigment = data[0];
        },
        err => console.log(err)
      );
    this.getQuestion$ = await this.assignmentsService
      .getQuestionByAssignemntId(this.id$)
      .subscribe(
        data => {
          this.dataQuestion = data;
          console.log(this.dataQuestion);
        },
        err => console.log(err)
      );
  }

  selectDataQuestion(dataQuestion) {
    // this.allDataQuestion = dataQuestion;
    this.dataUpdate = Object.assign({}, dataQuestion);
    this.checktSelectQuestion = true;
  }

  updateQuestion() {
    // console.log(this.dataUpdate);
    this.assignmentsService
      .updateQuestion(
        "204222",
        this.dataUpdate.anumber,
        this.dataUpdate.qnumber,
        this.dataUpdate.qid,
        this.dataUpdate.qdescription,
        this.dataUpdate.solution,
        this.dataUpdate.score
      )
      .subscribe(data => {
        this.checktSelectQuestion = false;
        this.getAssignment$.unsubscribe();
        this.getQuestion$.unsubscribe();
        this.getDetail();
        // this.assignmentsService.getAssignemntsDetailById(this.id$);
        // this.assignmentsService.getQuestionByAssignemntId(this.id$);
        // console.log(data);
      });
  }
}
