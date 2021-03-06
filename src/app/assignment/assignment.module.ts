import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AssignmentComponent } from "./assignment.component";
import { AssignmentListComponent } from "./assignment-list/assignment-list.component";
import { MaterialModule } from "../material/material.module";
import { SubmissionComponent } from "./submission/submission.component";
import { QuestionListComponent } from "./submission/question-list/question-list.component";
import { PrevSubmissionComponent } from "./submission/prev-submission/prev-submission.component";
import { RoutingModule } from "./assignment.routing";
import { AssignmentSubmissionDetailComponent } from "./submission/assignment-submission-detail/assignment-submission-detail.component";
import { FormsModule } from "@angular/forms";
import { FileUploadModule } from "ng2-file-upload";
import { FilterAssignmentPipe } from "./pipe/filter-assignment.pipe";

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, FileUploadModule],
  exports: [AssignmentComponent, AssignmentListComponent],
  declarations: [
    AssignmentComponent,
    AssignmentListComponent,
    SubmissionComponent,
    QuestionListComponent,
    PrevSubmissionComponent,
    AssignmentSubmissionDetailComponent,
    FilterAssignmentPipe
  ]
})
export class AssignmentModule {}
