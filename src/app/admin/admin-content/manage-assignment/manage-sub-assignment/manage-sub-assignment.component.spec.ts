import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSubAssignmentComponent } from './manage-sub-assignment.component';

describe('ManageSubAssignmentComponent', () => {
  let component: ManageSubAssignmentComponent;
  let fixture: ComponentFixture<ManageSubAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSubAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSubAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
