import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopOverviewComponent } from './top-overview.component';

describe('TopOverviewComponent', () => {
  let component: TopOverviewComponent;
  let fixture: ComponentFixture<TopOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
