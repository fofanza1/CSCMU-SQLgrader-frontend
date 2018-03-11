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
            path: "genaratetestcase",
            component: GenarateTestcaseComponent
          },
          {
            path: "",
            redirectTo: "assignmentlist",
            pathMatch: "full"
          }
        ]
      }
    ]
  }
];

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
