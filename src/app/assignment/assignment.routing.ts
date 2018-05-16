import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AssignmentComponent } from "../assignment/assignment.component";
// import { ParcticeComponent } from "./parctice/parctice.component";
import { SubmissionComponent } from "../assignment/submission/submission.component";

const routes: Routes = [
  {
    path: "assignment",
    component: AssignmentComponent,
    children: [
      {
        path: "assignment/:anumber",
        component: SubmissionComponent
      }
    ]
  }
];

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
