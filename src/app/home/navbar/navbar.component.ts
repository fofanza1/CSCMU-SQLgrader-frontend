import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "grader-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  logout = false;
  name: string;
  date: Date = new Date();
  constructor(private router: Router) {
    setInterval(() => {
      this.date = new Date();
    }, 1);
  }

  ngOnInit() {
    this.name = localStorage.getItem("name");
  }

  showLogout() {
    this.logout = !this.logout;
  }

  logoutHome() {
    localStorage.clear();
    this.router.navigate(["login"]);
  }
}
