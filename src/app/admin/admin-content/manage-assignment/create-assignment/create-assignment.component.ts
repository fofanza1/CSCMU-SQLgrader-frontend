import { Component, OnInit, Input } from "@angular/core";
import { DatabasesService } from "../../../../service/databases/databases.service";
import { AssignmentsService } from "../../../../service/assignments/assignments.service";
import * as moment from "moment";

@Component({
  selector: "grader-create-assignment",
  templateUrl: "./create-assignment.component.html",
  styleUrls: ["./create-assignment.component.scss"]
})
export class CreateAssignmentComponent implements OnInit {
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
    private dbService: DatabasesService
  ) {}

  ngOnInit() {
    this.minStartDate = new Date();
    this.assignmentsService.getAssignemntsDetail().subscribe(dataObj => {
      //this.dataAssignment = dataObj;
      for (var data in dataObj) {
        this.allAssignmentNumber.push(dataObj[data]["anumber"]);
      }
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
        this.selectedMoment[0],
        this.selectedMoment[1],
        this.selectDatabases
      )
      .subscribe(data => {
        this.loading = false;
        console.log(data);
      });
  }
  checkAssignmentNumber(data) {
    // console.log(this.selectedMoment);
    // console.log(new Date());
    console.log(moment(this.selectedMoment[0]).format("x"));
    this.assignmentNumber = parseInt(data);
    if (this.allAssignmentNumber.includes(this.assignmentNumber)) {
      this.errorMessageNumberAssignemnt = "เลขแบบฝึกหัดซ้ำกับข้ออื่น";
    } else {
      this.errorMessageNumberAssignemnt = "";
    }
  }
}
