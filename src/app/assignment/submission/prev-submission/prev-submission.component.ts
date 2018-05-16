import { Component, OnInit, Input, OnChanges } from "@angular/core";
import * as FileSaver from "file-saver";
import { TasksService } from "../../../service/tasks/tasks.service";

@Component({
  selector: "grader-prev-submission",
  templateUrl: "./prev-submission.component.html",
  styleUrls: ["./prev-submission.component.scss"]
})
export class PrevSubmissionComponent implements OnInit, OnChanges {
  showDetailBool = false;
  scoreId: any;
  allnosubmit: any;
  totalscore: any;
  data_;
  @Input() data;
  constructor(private taskService: TasksService) {}
  ngOnChanges(change) {
    console.log(change);
    if (change.data.currentValue) {
      this.data_ = change.data.currentValue.data.data;
      this.allnosubmit = this.data_.length;
    }

    console.log(this.data_);
  }

  downloadAssignmentFile(submitid) {
    this.taskService.getSubmissionFile(submitid).subscribe(res => {
      FileSaver.saveAs(res, "submitFile" + submitid + ".sql");
    });
  }

  showDetail(scoreid) {
    this.scoreId = scoreid;
    this.showDetailBool = true;
  }

  ChangeShowDetail(event) {
    // console.log("eiei");
    this.showDetailBool = event;
  }

  ngOnInit() {}
}
