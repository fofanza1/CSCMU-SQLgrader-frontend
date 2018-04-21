import { Component, OnInit } from "@angular/core";

@Component({
  selector: "grader-admin-menu",
  templateUrl: "./admin-menu.component.html",
  styleUrls: ["./admin-menu.component.scss"]
})
export class AdminMenuComponent implements OnInit {
  menus = [
    {
      name: "Manage course",
      link: "managecourse",
      submenu: [
        {
          sname: "e"
        }
      ]
    },
    {
      name: "Manage Databases",
      link: "managedb",
      submenu: [
        {
          sname: "Create Database"
        },
        {
          sname: "Manage Databases"
        }
      ]
    },
    {
      name: "Manage Assignment",
      link: "manageassignment",
      submenu: [
        {
          sname: "Create Assignment"
        },
        {
          sname: "Manage Assignment"
        }
      ]
    },
    {
      name: "Score",
      link: "score"
    },
    {
      name: "Logout",
      link: "/logout"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
