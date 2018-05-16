import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter
} from "@angular/core";
import { TasksService } from "../../../service/tasks/tasks.service";

@Component({
  selector: "grader-question-list",
  templateUrl: "./question-list.component.html",
  styleUrls: ["./question-list.component.scss"]
})
export class QuestionListComponent implements OnInit, OnChanges {
  showDetailBool: boolean;
  scoreIdValue: any;
  @Input() scoreId;
  @Output("showDetail")
  change: EventEmitter<boolean> = new EventEmitter<boolean>();
  data_;
  totalscore = 0;
  constructor(private taskService: TasksService) {}

  ngOnChanges(change) {
    console.log(change);
    if (change.scoreId.currentValue) {
      console.log(change.scoreId.currentValue);
      this.scoreIdValue = change.scoreId.currentValue;
      this.getSubmissionDetail(this.scoreIdValue);
      // this.showDetailBool = true;
      // this.taskService.getSubmissionDetail(this.scoreIdValue);
      // this.data_ = change.data.currentValue.data.data;
      // this.allnosubmit = this.data_.length;
    }
  }

  clickClose() {
    this.change.emit(false);
  }

  getSubmissionDetail(submitid) {
    this.taskService.getSubmissionDetail(submitid).subscribe(data => {
      this.data_ = data;
      console.log(data);
      this.totalscore = 0;
      for (let item of this.data_) {
        if (parseInt(item.submitscore)) {
          this.totalscore += parseInt(item.submitscore);
        }
      }
      console.log(this.totalscore);
      // console.log(this.data_);
      // this.change.emit(false);
    });
  }
  ngOnInit() {}
}
