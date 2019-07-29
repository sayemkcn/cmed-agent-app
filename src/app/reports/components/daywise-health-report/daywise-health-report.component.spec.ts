import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaywiseHealthReportComponent } from './daywise-health-report.component';

describe('DaywiseHealthReportComponent', () => {
  let component: DaywiseHealthReportComponent;
  let fixture: ComponentFixture<DaywiseHealthReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaywiseHealthReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaywiseHealthReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
