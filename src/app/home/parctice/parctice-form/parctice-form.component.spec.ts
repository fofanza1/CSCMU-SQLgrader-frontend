import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcticeFormComponent } from './parctice-form.component';

describe('ParcticeFormComponent', () => {
  let component: ParcticeFormComponent;
  let fixture: ComponentFixture<ParcticeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcticeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcticeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
