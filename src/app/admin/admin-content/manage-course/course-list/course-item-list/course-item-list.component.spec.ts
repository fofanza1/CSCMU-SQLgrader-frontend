import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemListComponent } from './course-item-list.component';

describe('CourseItemListComponent', () => {
  let component: CourseItemListComponent;
  let fixture: ComponentFixture<CourseItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
