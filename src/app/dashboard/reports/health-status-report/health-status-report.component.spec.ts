import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthStatusReportComponent } from './health-status-report.component';

describe('HealthStatusReportComponent', () => {
  let component: HealthStatusReportComponent;
  let fixture: ComponentFixture<HealthStatusReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthStatusReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthStatusReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
