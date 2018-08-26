import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { TasksService } from "../../../../service/tasks/tasks.service";
import * as FileSaver from "file-saver";

@Component({
  selector: "grader-view-submit-student",
  templateUrl: "./view-submit-student.component.html",
  styleUrls: ["./view-submit-student.component.scss"]
})
export class ViewSubmitStudentComponent implements OnInit, OnChanges {
  totalscore: any;
  detailSubmission: Object;
  constructor(private taskService: TasksService) {}
  @Input() dataDetail;
  @Input() nameDetail;
  ngOnInit() {}
  submissionDetail;
  nameStudentDetail;
  showDetail = false;

  ngOnChanges(change) {
    if (change.dataDetail.currentValue) {
      this.submissionDetail = change.dataDetail.currentValue.data;
      // console.log(this.submissionDetail);
    }
    // console.log(change.nameDetail);

    if (change.nameDetail) {
      this.nameStudentDetail = change.nameDetail.currentValue;
    }
  }

  viewDetail(data) {
    console.log(data);
    this.showDetail = true;
    this.totalscore = data.score;
    console.log(this.totalscore);
    this.getDetailSubmission(data.scoreid);
  }

  viewAnswer(data) {
    console.log(data.scoreid);
    this.taskService.getSubmissionFile(data.scoreid).subscribe(res => {
      FileSaver.saveAs(res, "submitFile" + data.scoreid + ".sql");
    });
  }

  getDetailSubmission(scoreid) {
    this.taskService.getSubmissionDetail(scoreid).subscribe(data => {
      this.detailSubmission = data;
    });
  }

  ChangeShowDetail(status) {
    this.showDetail = status;
  }
}
