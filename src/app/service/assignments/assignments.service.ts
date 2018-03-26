import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { environment } from "../../../environments/environment";

@Injectable()
export class AssignmentsService {
  subscribe(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  path: string;
  URL_SERVICE: string;
  constructor(private http: HttpClient) {
    this.URL_SERVICE = environment.URL_SERVICE;
    this.path = "/assignments";
  }
  getAssignemntsDetail() {
    return this.http.get(this.URL_SERVICE + this.path + "/dataassignment");
  }

  getAssignemntsDetailById(id) {
    return this.http.get(this.URL_SERVICE + this.path + "/getassignment/" + id);
  }

  getQuestionByAssignemntId(id) {
    return this.http.get(this.URL_SERVICE + this.path + "/getquestion/" + id);
  }

  updateQuestion(cid, anumber, qnumber, qid, qdescription, qsolution, score) {
    return this.http.post(this.URL_SERVICE + this.path + "/updatequestion", {
      cid: cid,
      qnumber: qnumber,
      anumber: anumber,
      qid: qid,
      qdescription: qdescription,
      qsolution: qsolution,
      score: score
    });
  }

  createAssignemnt(anumber, aname, noofquestion, startdate, duedate, dbid) {
    return this.http.post(this.URL_SERVICE + this.path + "/createassignment", {
      anumber: anumber,
      aname: aname,
      noofquestion: noofquestion,
      startdate: startdate,
      duedate: duedate,
      dbid: dbid
    });
  }
}
