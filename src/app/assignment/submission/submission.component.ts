import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AssignmentsService } from "../../service/assignments/assignments.service";
import * as moment from "moment";
import * as FileSaver from "file-saver";
import { TasksService } from "../../service/tasks/tasks.service";

// import { saveAs } from "file-saver";
@Component({
  selector: "grader-submission",
  templateUrl: "./submission.component.html",
  styleUrls: ["./submission.component.scss"]
})
export class SubmissionComponent implements OnInit {
  dataSubmission$: Object;
  dataAssignement$ = {
    aid: null,
    aname: null,
    anumber: null,
    astatus: null,
    cid: null,
    dbid: null,
    dbname: null,
    duedate: null,
    startdate: null,
    noofquestion: null,
    totalscore: null
  };
  assignmentNumber$: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private assignmentService: AssignmentsService,
    private taskSerivce: TasksService
  ) {}
  DBMs = [
    { value: "psql", name: "Postgres" },
    { value: "mysql", name: "MySQL, MariaDB" },
    { value: "sql", name: "microsoft sql server" }
  ];
  ngOnInit() {
    this.route.params.subscribe(async params => {
      this.assignmentNumber$ = params.anumber;
      console.log(this.assignmentNumber$);
      this.assignmentService
        .getAssignemntsDetailByNumberInUser(
          localStorage.getItem("courseId"),
          this.assignmentNumber$
        )
        .subscribe(
          data => {
            console.log(data);
            this.dataAssignement$ = data[0];
            this.subMissionDetail();
            // if (this.dataAssignement$.astatus !== "open") {
            //   this.router.navigate(["/home/assignment"]);
            // }
          },
          err => {
            this.router.navigate(["/home/assignment"]);
          }
        );
    });
  }

  downloadAssignmentFile() {
    this.assignmentService
      .downloadassignment(this.dataAssignement$.aid)
      .subscribe(res => {
        FileSaver.saveAs(res, "problem" + this.assignmentNumber$ + ".docx");
      });
  }

  downloadScriptFile() {
    this.assignmentService
      .downloadScriptAssignment(this.dataAssignement$.aid)
      .subscribe(res => {
        FileSaver.saveAs(res, "submitFile" + this.assignmentNumber$ + ".sql");
      });
  }

  subMissionDetail() {
    this.taskSerivce
      .submissionDetail(this.dataAssignement$.aid)
      .subscribe(res => {
        console.log(this.dataAssignement$.aid);
        this.dataSubmission$ = {
          data: res,
          totalscore: this.dataAssignement$.totalscore
        };
      });
  }

  goToAssignments() {
    this.router.navigate(["/home/assignment"]);
  }
}
