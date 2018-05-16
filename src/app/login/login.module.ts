import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login.component";
import { StudentsService } from "../service/students/students.service";
import { RoutingModule } from "./login.routing";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, RoutingModule, FormsModule],
  providers: [StudentsService],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule {}
