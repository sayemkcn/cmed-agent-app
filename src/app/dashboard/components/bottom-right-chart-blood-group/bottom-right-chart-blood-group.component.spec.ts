import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomRightChartBloodGroupComponent } from './bottom-right-chart-blood-group.component';

describe('BottomRightChartBloodGroupComponent', () => {
  let component: BottomRightChartBloodGroupComponent;
  let fixture: ComponentFixture<BottomRightChartBloodGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomRightChartBloodGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomRightChartBloodGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
