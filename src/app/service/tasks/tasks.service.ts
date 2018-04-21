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
    Authorization: localStorage.getItem("username")
  };

  httpOptions = {
    headers: new HttpHeaders(this.headerDetail)
  };

  submissionDetail(aid) {
    return this.http.get(
      this.URL_SERVICE + this.path + "/submissions/" + aid,
      this.httpOptions
    );
  }
}
