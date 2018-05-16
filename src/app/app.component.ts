import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "grader-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "grader";
  constructor(private router: Router) {}
  ngOnInit() {
    // if (localStorage.getItem("token")) {
    //   this.router.navigate(["home"]);
    // }
  }
}
