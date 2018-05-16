import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { AssignmentsService } from "../../../../service/assignments/assignments.service";
import { Subscription } from "rxjs";

@Component({
  selector: "grader-genarate-testcase",
  templateUrl: "./genarate-testcase.component.html",
  styleUrls: ["./genarate-testcase.component.scss"]
})
export class GenarateTestcaseComponent implements OnInit {
  showSucessUpdate = false;
  updateStatus = true;
  allAssignmentNumber = [];
  errorMsg: any;
  keyAnswer = [];
  getQuestion$: Subscription;
  getAssignment$: Subscription;
  allDataQuestion: any;
  checktSelectQuestion = false;
  dataQuestion: Object;
  showError = false;
  dbmsValue = "";
  editAssignmentNumber;
  editAssignmentName;
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
  showUpdate = false;
  noofquestionArr = [];
  assignmentNumber$: any;
  dataAssigment = {
    aid: null,
    dbname: null,
    aname: null,
    anumber: null,
    noofquestion: null,
    startdate: null,
    duedate: null,
    dbid: null,
    astatus: null,
    totalscore: 0
  };
  DBMs = [
    { value: "psql", name: "Postgres" },
    { value: "mysql", name: "MySQL, MariaDB" },
    { value: "sql", name: "microsoft sql server" }
  ];
  constructor(
    private route: ActivatedRoute,
    private assignmentsService: AssignmentsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(async params => {
      this.assignmentNumber$ = params.id;
      this.getDetail();
      this.getAssignmentNumber();
    });
  }

  getAssignmentNumber() {
    this.assignmentsService.getAssignemntsDetail().subscribe(dataObj => {
      //this.dataAssignment = dataObj;
      console.log(dataObj);
      for (var data in dataObj) {
        this.allAssignmentNumber.push(dataObj[data]["anumber"]);
      }
      var index = this.allAssignmentNumber.indexOf(this.dataAssigment.anumber);
      if (index > -1) {
        this.allAssignmentNumber.splice(index, 1);
      }
      console.log(this.allAssignmentNumber);
    });
  }

  assignmentNumberCheck() {
    this.editAssignmentNumber = !this.editAssignmentNumber
      ? ""
      : parseInt(this.editAssignmentNumber);
    if (!this.editAssignmentNumber) {
      this.updateStatus = false;
    } else if (
      this.allAssignmentNumber.indexOf(this.editAssignmentNumber) === -1
    ) {
      this.updateStatus = true;
    } else {
      this.updateStatus = false;
    }
    console.log(this.editAssignmentNumber);
  }

  async getDetail() {
    this.getAssignment$ = await this.assignmentsService
      .getAssignemntsDetailById(this.assignmentNumber$)
      .subscribe(
        data => {
          this.dataAssigment = data[0];
          this.editAssignmentNumber = this.dataAssigment.anumber;
          this.editAssignmentName = this.dataAssigment.aname;
          console.log(this.dataAssigment);
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

  deleteAssignment() {
    console.log(this.dataAssigment.aid);
    this.assignmentsService
      .deleteAssignment(this.dataAssigment.aid)
      .subscribe(data => {
        console.log(data);
        this.showError = false;
        this.router.navigate(["admin/manageassignment/assignmentlist"]);
      });
  }

  updateAssignment() {
    this.assignmentsService
      .updateAssignment(
        this.dataAssigment.aid,
        this.editAssignmentNumber,
        this.editAssignmentName
      )
      .subscribe(data => {
        var goToAssignment = this.editAssignmentNumber;
        this.getDetail();
        // this.getAssignmentNumber();
        this.showSucessUpdate = true;
        this.showUpdate = false;
        setTimeout(() => {
          this.showSucessUpdate = false;
          this.getDetail();
          this.router.navigate([
            "admin/manageassignment/assignmentlist/" + goToAssignment
          ]);
        }, 2000);
      });
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
