import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RegisterComponent } from "./register.component";
import { MaterialModule } from "../material/material.module";
import { RoutingModule } from "./register.routing";
import { CoursesService } from "../service/courses/courses.service";
import { FormsModule } from "@angular/forms";
import { OnlyNumberDirective } from "../directive/only-number.directive";
import { DirectiveModule } from "../directive/directive.module";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RoutingModule,
    FormsModule,
    DirectiveModule
  ],
  declarations: [RegisterComponent],
  providers: [CoursesService],
  exports: [RegisterComponent]
})
export class RegisterModule {}
