import { Component, OnInit } from "@angular/core";

@Component({
  selector: "grader-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  name: string;
  date: Date = new Date();
  constructor() {
    setInterval(() => {
      this.date = new Date();
    }, 1);
  }

  ngOnInit() {
    this.name = localStorage.getItem("name");
  }
}
