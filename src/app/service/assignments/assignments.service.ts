import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { environment } from "../../../environments/environment";
import { RequestOptions, ResponseContentType } from "@angular/http";

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
    return this.http.get(
      this.URL_SERVICE +
        this.path +
        "/dataassignment/" +
        localStorage.getItem("adminCourseId")
    );
  }

  getAssignemntsDetailById(assignmentsNumber) {
    return this.http.get(
      this.URL_SERVICE +
        this.path +
        "/getassignment/" +
        localStorage.getItem("adminCourseId") +
        "/" +
        assignmentsNumber
    );
  }

  getAssignemntsDetailByNumberInUser(cid, assignmentsNumber) {
    return this.http.get(
      this.URL_SERVICE +
        this.path +
        "/getassignment/" +
        cid +
        "/" +
        assignmentsNumber
    );
  }

  getQuestionByAssignemntId(cid, assignmentsNumber) {
    return this.http.get(
      this.URL_SERVICE +
        this.path +
        "/getquestion/" +
        localStorage.getItem("adminCourseId") +
        "/" +
        assignmentsNumber
    );
  }

  downloadassignment(aid) {
    return this.http.get(
      this.URL_SERVICE + this.path + "/downloadassignment/" + aid,
      {
        responseType: "blob"
      }
    );
  }

  downloadScriptAssignment(aid) {
    return this.http.get(
      this.URL_SERVICE + this.path + "/downloadscript/" + aid,
      {
        responseType: "blob"
      }
    );
  }

  updateQuestion(
    dbname,
    noofquestion,
    aid,
    qnumber,
    qid,
    qdescription,
    qsolution,
    score
  ) {
    return this.http.post(this.URL_SERVICE + this.path + "/updatequestion", {
      dbname: dbname,
      noofquestion: noofquestion,
      cid: localStorage.getItem("adminCourseId"),
      qnumber: qnumber,
      aid: aid,
      qid: qid,
      qdescription: qdescription,
      qsolution: qsolution,
      score: score
    });
  }

  createAssignemnt(anumber, aname, noofquestion, startdate, duedate, dbid) {
    return this.http.post(this.URL_SERVICE + this.path + "/createassignment", {
      cid: localStorage.getItem("adminCourseId"),
      anumber: anumber,
      aname: aname,
      noofquestion: noofquestion,
      startdate: startdate,
      duedate: duedate,
      dbid: dbid
    });
  }
}
