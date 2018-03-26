import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import {
  FileUploader,
  FileItem,
  ParsedResponseHeaders
} from "ng2-file-upload/ng2-file-upload";
import { DatabasesService } from "../../../../service/databases/databases.service";

@Component({
  selector: "grader-create-db",
  templateUrl: "./create-db.component.html",
  styleUrls: ["./create-db.component.scss"]
  // directives: [FILE_UPLOAD_DIRECTIVES, NgClass, NgStyle, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class CreateDbComponent implements OnInit {
  errorRes: any;
  messageWarn: string;
  // @Input() allDatabaseAssignment;
  dbNameControl: FormControl;
  dbNameInput = "";
  sqlFile: FileUploader;
  assignmentDbList;
  URL = "http://localhost:3000/databases/createdb";
  dbFile;
  dbmsValue = "";
  selected;
  errorMessageInput = "";
  errorFile = false;
  errorMessageFile = "";
  allDatabaseAssignment;
  loading;
  successRes = false;
  DBMs = [
    { value: "psql", name: "Postgres" },
    { value: "mysql", name: "MySQL, MariaDB" },
    { value: "sql", name: "microsoft sql server" }
  ];
  openCreateDb = false;
  // dbmsValue: FormControl;
  constructor(private dbService: DatabasesService) {
    // this.dbmsValue = new FormControl('psql');
    this.sqlFile = new FileUploader({
      url: this.URL,
      itemAlias: "databasefile"
    });

    this.sqlFile.onBuildItemForm = (item, form) => {
      this.loading = true;
      form.append("dbms", this.dbmsValue);
      // form.append("dbName", this.dbNameInput);
    };
  }

  async ngOnInit() {
    this.allDatabaseAssignment = await this.dbService.getDatabasesAssignmentName();
    this.loading = false;
    this.sqlFile.onAfterAddingFile = f => {
      if (this.sqlFile.queue.length > 1) {
        this.sqlFile.removeFromQueue(this.sqlFile.queue[0]);
      }
    };
    this.sqlFile.onErrorItem = (item, response, status, headers) =>
      this.onErrorItem(item, response, status, headers);
    this.sqlFile.onSuccessItem = (item, response, status, headers) =>
      this.onSuccessItem(item, response, status, headers);
    // console.log(this.allDatabaseAssignment);
  }

  onSuccessItem(
    item: FileItem,
    response: string,
    status: number,
    headers: ParsedResponseHeaders
  ): any {
    this.loading = false;
    this.successRes = true;
    let check_success = JSON.parse(response); //success server response
    console.log(check_success);
  }

  onErrorItem(
    item: FileItem,
    response: string,
    status: number,
    headers: ParsedResponseHeaders
  ): any {
    this.loading = false;
    this.errorRes = JSON.parse(response); //error server response
    console.log(this.errorRes);
  }

  clickCreatedb() {
    this.openCreateDb = !this.openCreateDb;
  }

  something2() {
    const name = this.sqlFile.queue[0].file.name
      .replace(".sql", "")
      .toLowerCase();
    if (this.sqlFile.queue[0].file.type !== "application/sql") {
      this.errorFile = true;
      this.errorMessageFile = "กรุณาอัพโหลดไฟล์ .sql เท่านั้น";
      this.messageWarn = "";
    } else if (this.allDatabaseAssignment.indexOf(name) > -1) {
      this.errorFile = false;
      this.messageWarn =
        "ชื่อไฟล์นำเข้าซ้ำกับชื่อดาต้าเบสในฐานข้อมูล กรุณาเช็กข้อมูลว่า ชื่อดาต้าเบสที่นำเข้าไม่ซ้ำกับชื่อดาต้าเบสที่อยู่ในฐานข้อมูล";
    } else {
      this.errorFile = false;
      this.messageWarn = "";
    }
  }
}
