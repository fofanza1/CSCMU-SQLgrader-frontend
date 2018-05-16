import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AssignmentsService } from "../../service/assignments/assignments.service";
import * as moment from "moment";
import * as FileSaver from "file-saver";
import { TasksService } from "../../service/tasks/tasks.service";
import {
  FileUploader,
  FileItem,
  ParsedResponseHeaders,
  FileUploaderOptions
} from "ng2-file-upload/ng2-file-upload";
import { environment } from "../../../environments/environment";
import { MatSnackBar } from "@angular/material";

// import { saveAs } from "file-saver";
@Component({
  selector: "grader-submission",
  templateUrl: "./submission.component.html",
  styleUrls: ["./submission.component.scss"]
})
export class SubmissionComponent implements OnInit {
  errRes: string;
  errorMessageFile: string;
  errorFile = false;
  dataSubmission$: Object;
  studentid;
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
  @ViewChild("selectedFile") selectedFile: any;
  headerFile: FileUploaderOptions = {};
  DBMs = [
    { value: "pg", name: "Postgres" },
    { value: "mysql", name: "MySQL, MariaDB" },
    { value: "sql", name: "microsoft sql server" }
  ];
  selectDBMs = "mysql";
  assignmentNumber$;
  sqlFile: FileUploader;
  URL = environment.URL_SERVICE + "/tasks/doassignment";
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private assignmentService: AssignmentsService,
    private taskSerivce: TasksService,
    public snackBar: MatSnackBar
  ) {
    this.sqlFile = new FileUploader({
      url: this.URL,
      itemAlias: "submitfile"
    });
    this.headerFile.headers = [
      { name: "Authorization", value: localStorage.getItem("studentid") }
    ];
    this.sqlFile.setOptions(this.headerFile);

    this.sqlFile.onBuildItemForm = (item, form) => {
      this.openSnackBar("กำลังส่งไฟล์");
      this.errRes = "";
      form.append("cid", localStorage.getItem("courseId"));
      form.append("aid", this.dataAssignement$.aid);
      form.append("anumber", this.dataAssignement$.anumber);
      form.append("noofquestion", this.dataAssignement$.noofquestion);
      form.append("dbname", this.dataAssignement$.dbname);
      form.append("dbms", this.selectDBMs);
    };
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, null, {
      duration: 3000,
      horizontalPosition: "center"
    });
  }

  ngOnInit() {
    // console.log('eiei');
    this.studentid = localStorage.getItem("studentid");
    this.sqlFile.onAfterAddingFile = f => {
      if (this.sqlFile.queue.length > 1) {
        this.sqlFile.removeFromQueue(this.sqlFile.queue[0]);
      }
    };
    this.sqlFile.onSuccessItem = (item, response, status, headers) =>
      this.onSuccessItem(item, response, status, headers);

    this.sqlFile.onErrorItem = (item, response, status, headers) =>
      this.onErrorItem(item, response, status, headers);

    // ----------------------------------------------------------

    this.route.params.subscribe(async params => {
      this.assignmentNumber$ = params.anumber;
      this.assignmentService
        .getAssignemntsDetailByNumberInUser(
          localStorage.getItem("courseId"),
          this.assignmentNumber$
        )
        .subscribe(
          data => {
            console.log(data);
            this.dataAssignement$ = data[0];
            console.log(this.dataAssignement$);

            if (
              this.dataAssignement$.astatus === "opening" &&
              moment(this.dataAssignement$.duedate).format("YYYY-MM-DDTHH:mm") <
                moment().format("YYYY-MM-DDTHH:mm")
            ) {
              this.assignmentService
                .changeToClose(this.dataAssignement$.aid)
                .subscribe(data => {
                  window.location.reload();
                });
            }
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

  onSuccessItem(
    item: FileItem,
    response: string,
    status: number,
    headers: ParsedResponseHeaders
  ): any {
    this.openSnackBar("คะแนนออกแล้วว ไปดูเลยจ้าา");
    console.log(this.sqlFile);
    // this.sqlFile.removeFromQueue(this.sqlFile.queue[0]);
    // this.sqlFile.queue[0].remove();
    this.subMissionDetail();
  }

  onErrorItem(
    item: FileItem,
    response: string,
    status: number,
    headers: ParsedResponseHeaders
  ): any {
    console.log("--------------------------------------------------");
    this.errRes = response;
    this.openSnackBar(this.errRes);
    console.log(response);
    console.log(item);
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

  detectFile() {
    var name = this.sqlFile.queue[0].file.name
      .replace(".sql", "")
      .toLowerCase();
    if (this.sqlFile.queue[0].file.type !== "application/sql") {
      this.errorFile = true;
      this.errorMessageFile = "กรุณาอัพโหลดไฟล์ .sql เท่านั้น";
    } else {
      this.errorFile = false;
      this.errorMessageFile = "";
    }
  }
}
