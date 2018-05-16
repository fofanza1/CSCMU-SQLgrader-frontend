import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { AssignmentComponent } from "../assignment/assignment.component";
import { ParcticeComponent } from "./parctice/parctice.component";
import { SubmissionComponent } from "../assignment/submission/submission.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    children: [
      {
        path: "assignment",
        component: AssignmentComponent
      },
      {
        path: "assignment/:anumber",
        component: SubmissionComponent
      },
      { path: "test", component: ParcticeComponent }
    ]
  }
];

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
