import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomRightChartMemberComponent } from './bottom-right-chart-member.component';

describe('BottomRightChartMemberComponent', () => {
  let component: BottomRightChartMemberComponent;
  let fixture: ComponentFixture<BottomRightChartMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomRightChartMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomRightChartMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
