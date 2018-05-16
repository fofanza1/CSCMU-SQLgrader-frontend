import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "grader-question-modal",
  templateUrl: "./question-modal.component.html",
  styleUrls: ["./question-modal.component.scss"]
})
export class QuestionModalComponent implements OnInit {
  submissionDetail: any;
  @Input() data;
  @Output("showDetail")
  change: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {}

  ngOnChanges(change) {
    if (change.data.currentValue) {
      this.submissionDetail = change.data.currentValue;
      console.log(this.submissionDetail);
    }
  }

  ngOnInit() {
    // console.log(this.data);
  }

  clickClose() {
    this.change.emit(false);
  }
}
