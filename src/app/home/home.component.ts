import { Component, OnInit } from "@angular/core";

@Component({
  selector: "grader-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  test() {
    window.scroll(0, 0);
  }
}
