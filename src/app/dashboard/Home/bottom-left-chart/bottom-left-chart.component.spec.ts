import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomLeftChartComponent } from './bottom-left-chart.component';

describe('BottomLeftChartComponent', () => {
  let component: BottomLeftChartComponent;
  let fixture: ComponentFixture<BottomLeftChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomLeftChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomLeftChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
