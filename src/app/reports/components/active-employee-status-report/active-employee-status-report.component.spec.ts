import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveEmployeeStatusReportComponent } from './active-employee-status-report.component';

describe('ActiveEmployeeStatusReportComponent', () => {
  let component: ActiveEmployeeStatusReportComponent;
  let fixture: ComponentFixture<ActiveEmployeeStatusReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveEmployeeStatusReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveEmployeeStatusReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
