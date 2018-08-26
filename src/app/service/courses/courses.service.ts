import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { environment } from "../../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable()
export class CoursesService {
  path: string;
  URL_SERVICE: string;
  constructor(private http: HttpClient) {
    this.URL_SERVICE = environment.URL_SERVICE;
    this.path = "/courses";
  }

  getAllCourse() {
    return this.http.get(this.URL_SERVICE + this.path + "/getallcourse");
  }

  getOpeningCourse() {
    return this.http.get(this.URL_SERVICE + this.path + "/getopeningcourse");
  }

  getSection(cid) {
    return this.http.get(this.URL_SERVICE + this.path + "/getsection/" + cid);
  }

  createCourse(ccode, cname, semester, year, cstatus, section) {
    return this.http.post(this.URL_SERVICE + this.path + "/addcourse", {
      ccode: ccode,
      cname: cname,
      semester: semester,
      year: year,
      cstatus: cstatus,
      section: section
    });
  }

  updateCourse(cid, ccode, cname, semester, year, cstatus, section) {
    return this.http.post(this.URL_SERVICE + this.path + "/updatecourse", {
      cid: cid,
      ccode: ccode,
      cname: cname,
      semester: semester,
      year: year,
      cstatus: cstatus,
      section: section
    });
  }
}
