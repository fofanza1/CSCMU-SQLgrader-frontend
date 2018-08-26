import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { environment } from "../../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
@Injectable()
export class StudentsService {
  path: string;
  URL_SERVICE: string;
  constructor(private http: HttpClient) {
    this.URL_SERVICE = environment.URL_SERVICE;
    this.path = "/students";
  }

  login(studentid, password) {
    return this.http.post(this.URL_SERVICE + this.path + "/login", {
      studentid: studentid,
      password: password
    });
  }

  register(password, studentid, fullname, cid, section) {
    return this.http.post(this.URL_SERVICE + this.path + "/registerstudent", {
      password: password,
      studentid: studentid,
      fullname: fullname,
      cid: cid,
      section: section
    });
  }
}
