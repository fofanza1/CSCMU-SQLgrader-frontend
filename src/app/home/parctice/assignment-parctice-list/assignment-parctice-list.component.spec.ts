import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentParcticeListComponent } from './assignment-parctice-list.component';

describe('AssignmentParcticeListComponent', () => {
  let component: AssignmentParcticeListComponent;
  let fixture: ComponentFixture<AssignmentParcticeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentParcticeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentParcticeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
