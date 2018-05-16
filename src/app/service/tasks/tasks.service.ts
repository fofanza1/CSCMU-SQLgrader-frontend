import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable()
export class TasksService {
  path: string;
  URL_SERVICE: string;
  constructor(private http: HttpClient) {
    this.URL_SERVICE = environment.URL_SERVICE;
    this.path = "/tasks";
  }
  headerDetail = {
    Authorization: localStorage.getItem("studentid")
  };

  httpOptions = {
    headers: new HttpHeaders(this.headerDetail)
  };

  assignmentListTask(cid) {
    return this.http.get(
      this.URL_SERVICE + this.path + "/assignmentlist/" + cid,
      this.httpOptions
    );
  }

  getSubmissionFile(submitid) {
    return this.http.get(
      this.URL_SERVICE + this.path + "/submissions/submitfile/" + submitid,
      {
        responseType: "blob"
      }
    );
  }

  submissionDetail(aid) {
    return this.http.get(
      this.URL_SERVICE + this.path + "/submissions/" + aid,
      this.httpOptions
    );
  }

  getSubmissionDetail(sumbitid) {
    return this.http.get(
      this.URL_SERVICE + this.path + "/submissions/detail/" + sumbitid,
      this.httpOptions
    );
  }
}
