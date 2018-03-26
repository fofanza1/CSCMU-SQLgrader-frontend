import { Component, OnInit, Input } from "@angular/core";
import { MatTableDataSource } from "@angular/material/";
import { DatabasesService } from "../../../../service/databases/databases.service";
declare var $: any;
@Component({
  selector: "grader-db-list",
  templateUrl: "./db-list.component.html",
  styleUrls: ["./db-list.component.scss"]
})
export class DbListComponent implements OnInit {
  // @Input() allDatabaseAssignment;
  allDataTable: Object;
  colName: string[];
  dataTableList: Object;
  tableNameActive;
  existsDb = 0;
  displayedColumns = [];
  dataSource;
  dbName = "";
  allDatabaseAssignment;

  constructor(private dbService: DatabasesService) {}

  async ngOnInit() {
    this.allDatabaseAssignment = await this.dbService.getDatabasesAssignmentName();
    console.log(this.allDatabaseAssignment);
    // this.getDatabaseAssignment();
  }

  // getDatabaseAssignment() {
  //   this.dbService.getDatabasesAssignment().subscribe(data => {
  //     for (const x in data) {
  //       if (data.hasOwnProperty(x)) {
  //         this.allDatabaseAssignment.push(data[x].dbname);
  //       }
  //     }
  //     console.log(this.allDatabaseAssignment);
  //   });
  // }

  searchDbName(value) {
    if (this.allDatabaseAssignment.indexOf(value) > -1) {
      this.dbName = value;
      this.getTableList(value);
      this.existsDb = 1;
    } else {
      this.existsDb = 2;
    }
  }

  getTableList(dbName) {
    this.dbService.getTableList(dbName).subscribe(data => {
      this.dataTableList = data;
      console.log(data);
    });
  }

  clickTable(data) {
    this.tableNameActive = data.tablename;
    this.getColList(this.dbName, this.tableNameActive);
  }

  getColList(dbName, tableName) {
    this.dbService.getColList(dbName, tableName).subscribe(data => {
      this.colName = Object.keys(data[0]);
      this.allDataTable = data;
    });
  }
}
