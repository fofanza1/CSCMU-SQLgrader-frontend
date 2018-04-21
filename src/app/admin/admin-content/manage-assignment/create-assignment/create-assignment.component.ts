import { Component, OnInit, Input } from "@angular/core";
import { DatabasesService } from "../../../../service/databases/databases.service";
import { AssignmentsService } from "../../../../service/assignments/assignments.service";
import * as moment from "moment";
import { Router } from "@angular/router";

@Component({
  selector: "grader-create-assignment",
  templateUrl: "./create-assignment.component.html",
  styleUrls: ["./create-assignment.component.scss"]
})
export class CreateAssignmentComponent implements OnInit {
  errMsg: any;
  sucMsg = false;
  allDatabasesObj: Object;
  minStartDate: Date;
  assignmentNumber;
  selectedMoment = [null, null];
  assignmentName;
  noofquestion;
  dataAssignment;
  selectDatabases;
  errorMessageNumberAssignemnt = "";
  loading = false;
  allAssignmentNumber = [];
  constructor(
    private assignmentsService: AssignmentsService,
    private dbService: DatabasesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.minStartDate = new Date();
    console.log(new Date(2012, 11, 21, 5, 30, 0));
    this.assignmentsService.getAssignemntsDetail().subscribe(dataObj => {
      //this.dataAssignment = dataObj;
      console.log(dataObj);
      for (var data in dataObj) {
        this.allAssignmentNumber.push(dataObj[data]["anumber"]);
      }
      console.log(this.allAssignmentNumber);
    });
    this.dbService.getDatabases().subscribe(databasesObj => {
      this.allDatabasesObj = databasesObj;
    });
  }

  createAssignment() {
    this.loading = true;
    this.assignmentsService
      .createAssignemnt(
        this.assignmentNumber,
        this.assignmentName,
        this.noofquestion,
        moment(this.selectedMoment[0]).format("YYYY-MM-DDTHH:mm"),
        moment(this.selectedMoment[1]).format("YYYY-MM-DDTHH:mm"),
        this.selectDatabases
      )
      .subscribe(
        data => {
          this.assignmentName = "";
          this.loading = false;
          this.sucMsg = true;
          console.log(data);
          setTimeout(() => {
            this.router.navigate([
              "admin/manageassignment/assignmentlist/" + this.assignmentNumber
            ]);
          }, 1000);
        },
        err => {
          this.loading = false;
          this.errMsg = err;
        }
      );
  }
  checkAssignmentNumber(data) {
    // console.log(this.selectedMoment);
    // console.log(new Date());
    console.log(moment(this.selectedMoment[0]).format("YYYY-MM-DDTHH:mm"));
    this.assignmentNumber = parseInt(data);
    if (this.allAssignmentNumber.includes(this.assignmentNumber)) {
      this.errorMessageNumberAssignemnt = "เลขแบบฝึกหัดซ้ำกับข้ออื่น";
    } else {
      this.errorMessageNumberAssignemnt = "";
    }
  }
}
