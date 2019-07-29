import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRegistrationReportComponent } from './employee-registration-report.component';

describe('EmployeeRegistrationReportComponent', () => {
  let component: EmployeeRegistrationReportComponent;
  let fixture: ComponentFixture<EmployeeRegistrationReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeRegistrationReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeRegistrationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
