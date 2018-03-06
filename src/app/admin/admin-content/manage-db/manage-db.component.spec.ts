import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDbComponent } from './manage-db.component';

describe('ManageDbComponent', () => {
  let component: ManageDbComponent;
  let fixture: ComponentFixture<ManageDbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageDbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
