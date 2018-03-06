import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { FileUploader } from "ng2-file-upload/ng2-file-upload";

@Component({
  selector: "grader-create-db",
  templateUrl: "./create-db.component.html",
  styleUrls: ["./create-db.component.scss"]
  // directives: [FILE_UPLOAD_DIRECTIVES, NgClass, NgStyle, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class CreateDbComponent implements OnInit, OnChanges {
  @Input() allDatabaseAssignment;
  dbNameControl: FormControl;
  dbNameInput = "";
  sqlFile: FileUploader;
  assignmentDbList;
  URL = "http://localhost:3000/databases/createdb";
  dbFile;
  dbmsValue = "";
  selected;
  errorInput = false;
  errorMessageInput = "";
  errorFile = false;
  errorMessageFile = "";
  DBMs = [
    { value: "psql", name: "Postgres" },
    { value: "mysql", name: "MySQL, MariaDB" },
    { value: "sql", name: "microsoft sql server" }
  ];
  openCreateDb = false;
  // dbmsValue: FormControl;
  constructor() {
    // this.dbmsValue = new FormControl('psql');
    this.sqlFile = new FileUploader({
      url: this.URL,
      itemAlias: "databasefile"
    });

    this.sqlFile.onBuildItemForm = (item, form) => {
      form.append("dbms", this.dbmsValue);
      form.append("dbName", this.dbNameInput);
    };
  }

  ngOnChanges(changes: SimpleChanges) {
    this.assignmentDbList = changes.allDatabaseAssignment.currentValue;
    console.log(this.assignmentDbList);
  }

  ngOnInit() {
    this.sqlFile.onAfterAddingFile = f => {
      if (this.sqlFile.queue.length > 1) {
        this.sqlFile.removeFromQueue(this.sqlFile.queue[0]);
      }
    };
    // console.log(this.allDatabaseAssignment);
  }

  clickCreatedb() {
    this.openCreateDb = !this.openCreateDb;
  }

  something(e) {
    const name = this.sqlFile.queue[0]
      ? this.sqlFile.queue[0].file.name.replace(".sql", "")
      : "";
    this.dbNameInput = e;
    if (name === this.dbNameInput) {
      this.errorFile = false;
      this.errorMessageFile = "";
    } else if (this.assignmentDbList.includes(e)) {
      this.errorFile = true;
      this.errorMessageFile = "ชื่อดาต้าเบสต้องไม่ซ้ำก้บดาต้าเบสอื่น ๆ ";
    } else if (name !== this.dbNameInput) {
      this.errorFile = true;
      this.errorMessageFile = "ตั้งชื่อไฟล์ใหเหมือนกับชื่อดาต้าเบสที่นำเข้ามา";
    }
    if (e === "") {
      this.errorInput = true;
      this.errorMessageInput = "กรุณาใส่ชื่อดาต้าเบส";
    } else if (Number.isInteger(parseInt(e[0]))) {
      this.errorInput = true;
      this.errorMessageInput = "ห้ามใส่ตัวเลขขึ้นต้น";
    } else if (e.length < 4) {
      this.errorInput = true;
      this.errorMessageInput = "กรุณาใส่ให้ชื่อดาต้าเบสให้มากกว่า 3 ตัวอักษร";
    } else {
      this.errorInput = false;
    }
  }

  something2() {
    const name = this.sqlFile.queue[0].file.name.replace(".sql", "");
    console.log(name);
    if (this.sqlFile.queue[0].file.type !== "application/sql") {
      this.errorFile = true;
      this.errorMessageFile = "กรุณาอัพโหลดไฟล์ .sql เท่านั้น";
    } else if (name != this.dbNameInput) {
      console.log(name, this.dbNameInput);
      this.errorFile = true;
      this.errorMessageFile = "ตั้งชื่อไฟล์ใหเหมือนกับชื่อดาต้าเบสที่นำเข้ามา";
    } else {
      this.errorFile = false;
    }
  }
}
