import { Component, OnInit, Input, OnChanges } from "@angular/core";

@Component({
  selector: "grader-prev-submission",
  templateUrl: "./prev-submission.component.html",
  styleUrls: ["./prev-submission.component.scss"]
})
export class PrevSubmissionComponent implements OnInit, OnChanges {
  totalscore: any;
  data_;
  @Input() data;
  constructor() {}
  ngOnChanges(change) {
    console.log(change);
    if (change.data.currentValue) {
      this.data_ = change.data.currentValue.data.data;
      this.totalscore = change.data.currentValue.totalscore;
    }

    console.log(this.data_);
  }

  ngOnInit() {}
}
