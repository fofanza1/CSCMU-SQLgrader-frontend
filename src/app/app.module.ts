import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AdminModule } from "./admin/admin.module";
import { LoginModule } from "./login/login.module";
import { HomeModule } from "./home/home.module";
// import { HttpModule } from '@angular/http';
import { Ng2AutoCompleteModule } from "ng2-auto-complete";
// import { OwlDateTimeModule, OwlNativeDateTimeModule } from "ng-pick-datetime";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AdminComponent } from "./admin/admin.component";
import { MaterialModule } from "./material/material.module";
import { HttpClientModule } from "@angular/common/http";
// import { OwlDateTimeModule, OwlNativeDateTimeModule } from "ng-pick-datetime";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from "./home/home.component";
import { AssignmentModule } from "./assignment/assignment.module";
import { ModalComponent } from './modal/modal.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "admin", component: AdminComponent },
  { path: "home", loadChildren: "./home/home.module#HomeModule" }
];

@NgModule({
  declarations: [AppComponent, ModalComponent],
  imports: [
    BrowserModule,
    AdminModule,
    BrowserAnimationsModule,
    LoginModule,
    HomeModule,
    MaterialModule,
    Ng2AutoCompleteModule,
    HttpClientModule,
    AssignmentModule,
    // OwlDateTimeModule,
    // OwlNativeDateTimeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
