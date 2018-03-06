import { Component, OnInit } from "@angular/core";

@Component({
  selector: "grader-submission",
  templateUrl: "./submission.component.html",
  styleUrls: ["./submission.component.scss"]
})
export class SubmissionComponent implements OnInit {
  constructor() {}
  DBMs = [
    { value: "psql", name: "Postgres" },
    { value: "mysql", name: "MySQL, MariaDB" },
    { value: "sql", name: "microsoft sql server" }
  ];
  ngOnInit() {}

  goToAssignments() {}
}
