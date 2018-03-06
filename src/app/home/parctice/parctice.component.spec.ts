import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcticeComponent } from './parctice.component';

describe('ParcticeComponent', () => {
  let component: ParcticeComponent;
  let fixture: ComponentFixture<ParcticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
