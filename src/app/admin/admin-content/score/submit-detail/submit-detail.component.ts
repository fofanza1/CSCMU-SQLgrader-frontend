import { Component, OnInit, OnChanges, Input } from "@angular/core";
import * as _ from "lodash";
@Component({
  selector: "grader-submit-detail",
  templateUrl: "./submit-detail.component.html",
  styleUrls: ["./submit-detail.component.scss"]
})
export class SubmitDetailComponent implements OnInit, OnChanges {
  constructor() {}
  @Input() dataDetail;
  ngOnInit() {}
  dataLerning;
  arrScore;
  avg_;
  sd_;
  max_;
  min_;

  ngOnChanges(change) {
    if (change.dataDetail.currentValue) {
      this.arrScore = [];
      this.dataLerning = change.dataDetail.currentValue;
      for (let data of this.dataLerning) {
        this.arrScore.push(data.score);
      }
      this.max_ = _.max(this.arrScore);
      this.min_ = _.min(this.arrScore);
      this.avg_ = _.sum(this.arrScore) / this.arrScore.length;
      this.sd_ = Math.sqrt(
        _.sum(_.map(this.arrScore, i => Math.pow(i - this.avg_, 2))) /
          this.arrScore.length
      );
    }
  }
}
