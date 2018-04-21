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
  errorMsg: any;
  keyAnswer = [];
  getQuestion$: Subscription;
  getAssignment$: Subscription;
  allDataQuestion: any;
  checktSelectQuestion = false;
  dataQuestion: Object;
  dbmsValue = "";
  dataUpdate = {
    dbname: null,
    aid: null,
    qnumber: null,
    qid: null,
    qdescription: null,
    solution: null,
    score: 0,
    answer: []
  };
  errorUpdate = false;
  noofquestionArr = [];
  assignmentNumber$: any;
  dataAssigment = {
    dbname: null,
    aname: null,
    anumber: null,
    noofquestion: null,
    startdate: null,
    duedate: null,
    dbid: null,
    totalscore: 0
  };
  DBMs = [
    { value: "psql", name: "Postgres" },
    { value: "mysql", name: "MySQL, MariaDB" },
    { value: "sql", name: "microsoft sql server" }
  ];
  constructor(
    private route: ActivatedRoute,
    private assignmentsService: AssignmentsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(async params => {
      this.assignmentNumber$ = params.id;
      this.getDetail();
    });
  }

  async getDetail() {
    this.getAssignment$ = await this.assignmentsService
      .getAssignemntsDetailById(this.assignmentNumber$)
      .subscribe(
        data => {
          this.dataAssigment = data[0];
        },
        err => console.log(err)
      );
    this.getQuestion$ = await this.assignmentsService
      .getQuestionByAssignemntId(
        localStorage.getItem("adminCourseId"),
        this.assignmentNumber$
      )
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
    this.keyAnswer = [];
    console.log(this.dataUpdate);
    if (Object.keys(this.dataUpdate.answer).length > 0) {
      this.keyAnswer = Object.keys(this.dataUpdate.answer[0]);
    }
    this.checktSelectQuestion = true;
  }

  updateQuestion() {
    console.log(this.dataAssigment);
    this.assignmentsService
      .updateQuestion(
        this.dataAssigment.dbname,
        this.dataAssigment.noofquestion,
        this.dataUpdate.aid,
        this.dataUpdate.qnumber,
        this.dataUpdate.qid,
        this.dataUpdate.qdescription,
        this.dataUpdate.solution,
        this.dataUpdate.score
      )
      .subscribe(
        data => {
          console.log(data);
          this.checktSelectQuestion = false;
          this.errorUpdate = false;
          this.getAssignment$.unsubscribe();
          this.getQuestion$.unsubscribe();
          this.getDetail();
          this.errorMsg = "";
          // this.assignmentsService.getAssignemntsDetailById(this.id$);
          // this.assignmentsService.getQuestionByAssignemntId(this.id$);
          // console.log(data);
        },
        error => {
          this.errorUpdate = true;
          this.errorMsg = error.error;
        }
      );
  }
}
