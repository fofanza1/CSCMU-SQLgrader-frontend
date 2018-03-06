import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevSubmissionComponent } from './prev-submission.component';

describe('PrevSubmissionComponent', () => {
  let component: PrevSubmissionComponent;
  let fixture: ComponentFixture<PrevSubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevSubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
