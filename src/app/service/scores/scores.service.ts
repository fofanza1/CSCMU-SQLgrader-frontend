import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpHeaders, HttpClient } from "@angular/common/http";

@Injectable()
export class ScoresService {
  path: string;
  URL_SERVICE: string;
  constructor(private http: HttpClient) {
    this.URL_SERVICE = environment.URL_SERVICE;
    this.path = "/scores";
  }
  headerDetail = { Authorization: localStorage.getItem("studentid") };

  httpOptions = { headers: new HttpHeaders(this.headerDetail) };

  getScorebyAssignmentId(aid) {
    return this.http.get(this.URL_SERVICE + this.path + "/getallscore/" + aid);
  }

  getScorebyAssignmentIdAndSection(aid, section) {
    return this.http.get(
      this.URL_SERVICE + this.path + "/getallscore/" + aid + "/" + section
    );
  }

  getScoreDetailbyAssignmentId(aid) {
    return this.http.get(
      this.URL_SERVICE + this.path + "/getdetailscore/" + aid
    );
  }

  viewSubmissionStudent(studentid, aid) {
    return this.http.get(
      this.URL_SERVICE + this.path + "/viewsubmissions/" + studentid + "/" + aid
    );
  }
}
