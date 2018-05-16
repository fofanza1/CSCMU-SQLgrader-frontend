import { Component, OnInit } from "@angular/core";
import { StudentsService } from "../service/students/students.service";
import { Router } from "@angular/router";

@Component({
  selector: "grader-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  username;
  password;
  show_error = false;
  constructor(private loginService: StudentsService, private router: Router) {}

  ngOnInit() {}

  login() {
    this.loginService.login(this.username, this.password).subscribe(
      data => {
        console.log(data);
        this.show_error = false;
        localStorage.setItem("courseId", data["courseid"]);
        localStorage.setItem("name", data["name"]);
        localStorage.setItem("studentid", this.username);
        localStorage.setItem("token", data["token"]);
        this.router.navigate(["/home"]);
      },
      err => {
        this.show_error = true;
      }
    );
  }
}
