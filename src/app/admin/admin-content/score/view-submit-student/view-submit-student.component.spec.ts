import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubmitStudentComponent } from './view-submit-student.component';

describe('ViewSubmitStudentComponent', () => {
  let component: ViewSubmitStudentComponent;
  let fixture: ComponentFixture<ViewSubmitStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSubmitStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSubmitStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
