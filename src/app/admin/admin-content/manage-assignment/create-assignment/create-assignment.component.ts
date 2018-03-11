import { Component, OnInit } from "@angular/core";
import { DatabasesService } from "../../../../service/databases/databases.service";

@Component({
  selector: "grader-create-assignment",
  templateUrl: "./create-assignment.component.html",
  styleUrls: ["./create-assignment.component.scss"]
})
export class CreateAssignmentComponent implements OnInit {
  constructor(private dbService: DatabasesService) {}

  ngOnInit() {}
}
