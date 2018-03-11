import { Component, OnInit } from "@angular/core";
import { DatabasesService } from "../../../service/databases/databases.service";

@Component({
  selector: "grader-manage-db",
  templateUrl: "./manage-db.component.html",
  styleUrls: ["./manage-db.component.scss"]
})
export class ManageDbComponent implements OnInit {
  constructor(private dbService: DatabasesService) {}
  allDatabaseAssignment = [];
  ngOnInit() {
    // this.getDatabaseAssignment();
    // console.log("eiei");
  }

  // getDatabaseAssignment() {
  //   this.dbService.getDatabasesAssignment().subscribe(data => {
  //     for (const x in data) {
  //       if (data.hasOwnProperty(x)) {
  //         this.allDatabaseAssignment.push(data[x].dbname);
  //       }
  //     }
  //     // console.log(this.allDatabaseAssignment);
  //   });
  //   console.log(this.allDatabaseAssignment);
  // }
}
