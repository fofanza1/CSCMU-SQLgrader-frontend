import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "grader-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    console.log(this.router.url);
    if(this.router.url === "/home"){
      this.router.navigate(["home/assignment/"]);
    }
  }

  test() {
    window.scroll(0, 0);
  }
}
