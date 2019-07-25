import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMeasurementsReportComponent } from './all-measurements-report.component';

describe('AllMeasurementsReportComponent', () => {
  let component: AllMeasurementsReportComponent;
  let fixture: ComponentFixture<AllMeasurementsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllMeasurementsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMeasurementsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
