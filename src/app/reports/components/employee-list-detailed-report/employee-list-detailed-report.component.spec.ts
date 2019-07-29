import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListDetailedReportComponent } from './employee-list-detailed-report.component';

describe('EmployeeListDetailedReportComponent', () => {
  let component: EmployeeListDetailedReportComponent;
  let fixture: ComponentFixture<EmployeeListDetailedReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeListDetailedReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListDetailedReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
