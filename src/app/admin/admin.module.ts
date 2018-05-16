import { NgModule, Directive } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin.component";
import { AdminMenuComponent } from "./admin-menu/admin-menu.component";
import { AdminContentComponent } from "./admin-content/admin-content.component";
import { ManageDbComponent } from "./admin-content/manage-db/manage-db.component";
import { CreateDbComponent } from "./admin-content/manage-db/create-db/create-db.component";
import { DbListComponent } from "./admin-content/manage-db/db-list/db-list.component";
import { MaterialModule } from "../material/material.module";
import { FormsModule } from "@angular/forms";
import {
  FileSelectDirective,
  FileDropDirective,
  FileUploadModule
} from "ng2-file-upload";
import { OwlDateTimeModule, OwlNativeDateTimeModule } from "ng-pick-datetime";
import { DatabasesService } from "../service/databases/databases.service";
import { CoursesService } from "../service/courses/courses.service";
import { AssignmentsService } from "../service/assignments/assignments.service";
CoursesService;
import { Ng2AutoCompleteModule } from "ng2-auto-complete";
import { ManageAssignmentComponent } from "./admin-content/manage-assignment/manage-assignment.component";
import { CreateAssignmentComponent } from "./admin-content/manage-assignment/create-assignment/create-assignment.component";
import { ManageSubAssignmentComponent } from "./admin-content/manage-assignment/manage-sub-assignment/manage-sub-assignment.component";
import { RoutingModule } from "./admin.routing";
import { GenarateTestcaseComponent } from "./admin-content/manage-assignment/genarate-testcase/genarate-testcase.component";
import { ModalComponent } from "../modal/modal.component";
import { HighlightModule } from "ngx-highlightjs";
import { OnlyNumberDirective } from "../directive/only-number.directive";
import { AssignmentFilterPipe } from "./pipe/assignment-filter.pipe";
import { ManageCourseComponent } from "./admin-content/manage-course/manage-course.component";
import { CreateCourseComponent } from "./admin-content/manage-course/create-course/create-course.component";
import { CourseListComponent } from "./admin-content/manage-course/course-list/course-list.component";
import { CourseItemListComponent } from "./admin-content/manage-course/course-list/course-item-list/course-item-list.component";
import { ScoreComponent } from "./admin-content/score/score.component";
import { DirectiveModule } from "../directive/directive.module";
import { ScoresService } from "../service/scores/scores.service";
import { SubmitDetailComponent } from './admin-content/score/submit-detail/submit-detail.component';
import { ViewSubmitStudentComponent } from './admin-content/score/view-submit-student/view-submit-student.component';
import { QuestionModalComponent } from './admin-content/score/view-submit-student/question-modal/question-modal.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    Ng2AutoCompleteModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    // FileSelectDirective
    FileUploadModule,
    HighlightModule,
    RoutingModule,
    DirectiveModule
  ],
  providers: [
    DatabasesService,
    AssignmentsService,
    CoursesService,
    ScoresService
  ],

  declarations: [
    AdminComponent,
    AdminMenuComponent,
    AdminContentComponent,
    ManageDbComponent,
    CreateDbComponent,
    DbListComponent,
    ManageAssignmentComponent,
    CreateAssignmentComponent,
    ManageSubAssignmentComponent,
    GenarateTestcaseComponent,
    ModalComponent,
    AssignmentFilterPipe,
    ManageCourseComponent,
    CreateCourseComponent,
    CourseListComponent,
    CourseItemListComponent,
    ScoreComponent,
    SubmitDetailComponent,
    ViewSubmitStudentComponent,
    QuestionModalComponent
  ],
  exports: [
    AdminComponent,
    AdminMenuComponent,
    AdminContentComponent,
    ManageDbComponent,
    CreateDbComponent,
    DbListComponent,
    ManageAssignmentComponent,
    CreateAssignmentComponent,
    GenarateTestcaseComponent,
    ModalComponent
  ]
})
export class AdminModule {}
