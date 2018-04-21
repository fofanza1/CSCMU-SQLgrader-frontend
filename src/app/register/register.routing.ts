import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./register.component";

const routes: Routes = [
  {
    path: "register",
    component: RegisterComponent
  }
];

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
