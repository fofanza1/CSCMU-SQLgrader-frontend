import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { TasksService } from "../../../../service/tasks/tasks.service";

@Component({
  selector: "grader-view-submit-student",
  templateUrl: "./view-submit-student.component.html",
  styleUrls: ["./view-submit-student.component.scss"]
})
export class ViewSubmitStudentComponent implements OnInit, OnChanges {
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

  viewDetail(scoreid) {
    this.showDetail = true;
    // this.taskServic
    this.getDetailSubmission(scoreid);
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
