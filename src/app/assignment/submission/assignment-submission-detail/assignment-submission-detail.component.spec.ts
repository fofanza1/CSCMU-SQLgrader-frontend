import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentSubmissionDetailComponent } from './assignment-submission-detail.component';

describe('AssignmentSubmissionDetailComponent', () => {
  let component: AssignmentSubmissionDetailComponent;
  let fixture: ComponentFixture<AssignmentSubmissionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentSubmissionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentSubmissionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
