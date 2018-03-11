import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDividerModule } from "@angular/material/divider";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressSpinnerModule
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressSpinnerModule
  ],
  declarations: []
})
export class MaterialModule {}
