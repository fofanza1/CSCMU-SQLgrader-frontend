import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenarateTestcaseComponent } from './genarate-testcase.component';

describe('GenarateTestcaseComponent', () => {
  let component: GenarateTestcaseComponent;
  let fixture: ComponentFixture<GenarateTestcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenarateTestcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenarateTestcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
