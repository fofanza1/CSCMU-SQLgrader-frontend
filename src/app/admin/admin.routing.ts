import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { ManageDbComponent } from "./admin-content/manage-db/manage-db.component";
import { CreateDbComponent } from "./admin-content/manage-db/create-db/create-db.component";
import { DbListComponent } from "./admin-content/manage-db/db-list/db-list.component";
import { ManageAssignmentComponent } from "./admin-content/manage-assignment/manage-assignment.component";
import { CreateAssignmentComponent } from "./admin-content/manage-assignment/create-assignment/create-assignment.component";
import { ManageSubAssignmentComponent } from "./admin-content/manage-assignment/manage-sub-assignment/manage-sub-assignment.component";
import { GenarateTestcaseComponent } from "./admin-content/manage-assignment/genarate-testcase/genarate-testcase.component";
import { ManageCourseComponent } from "./admin-content/manage-course/manage-course.component";
import { CreateCourseComponent } from "./admin-content/manage-course/create-course/create-course.component";
import { CourseListComponent } from "./admin-content/manage-course/course-list/course-list.component";
import { ScoreComponent } from "./admin-content/score/score.component";

const routes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
    children: [
      {
        path: "managedb",
        component: ManageDbComponent,
        children: [
          {
            path: "createdb",
            component: CreateDbComponent
          },
          {
            path: "dblist",
            component: DbListComponent
          },
          {
            path: "",
            redirectTo: "dblist",
            pathMatch: "full"
          }
        ]
      },
      {
        path: "manageassignment",
        component: ManageAssignmentComponent,
        children: [
          {
            path: "createassignment",
            component: CreateAssignmentComponent
          },
          {
            path: "assignmentlist",
            component: ManageSubAssignmentComponent
          },
          {
            path: "assignmentlist/:id",
            component: GenarateTestcaseComponent
          },
          {
            path: "",
            redirectTo: "assignmentlist",
            pathMatch: "full"
          }
        ]
      },
      {
        path: "managecourse",
        component: ManageCourseComponent,
        children: [
          {
            path: "createcourse",
            component: CreateCourseComponent
          },
          {
            path: "courselist",
            component: CourseListComponent
          },
          {
            path: "",
            redirectTo: "courselist",
            pathMatch: "full"
          }
        ]
      },
      {
        path: "score",
        component: ScoreComponent
      }
    ]
  }
];

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
