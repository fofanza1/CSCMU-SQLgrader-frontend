import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { MaterialModule } from "../material/material.module";
import { AssignmentModule } from "../assignment/assignment.module";
import { ParcticeComponent } from "./parctice/parctice.component";
import { AssignmentParcticeListComponent } from "./parctice/assignment-parctice-list/assignment-parctice-list.component";
import { RoutingModule } from "./home.routing";
import { ParcticeFormComponent } from './parctice/parctice-form/parctice-form.component';

@NgModule({
  imports: [CommonModule, MaterialModule, AssignmentModule, RoutingModule],
  exports: [HomeComponent, NavbarComponent],
  declarations: [
    HomeComponent,
    NavbarComponent,
    ParcticeComponent,
    AssignmentParcticeListComponent,
    ParcticeFormComponent
  ]
})
export class HomeModule {}
