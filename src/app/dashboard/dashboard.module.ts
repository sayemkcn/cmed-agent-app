import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import { StatsComponent } from './components/stats/stats.component';
import { TopOverviewComponent } from './components/top-overview/top-overview.component';
import { BottomLeftChartComponent } from './components/bottom-left-chart/bottom-left-chart.component';
import { BottomRightChartMemberComponent } from './components/bottom-right-chart-member/bottom-right-chart-member.component';
import { BottomRightChartBloodGroupComponent } from './components/bottom-right-chart-blood-group/bottom-right-chart-blood-group.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatIconModule,
  MatInputModule,
  MatTabsModule
} from '@angular/material';
import {ChartsModule} from 'ng2-charts';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
@NgModule({
  declarations: [StatsComponent,
    TopOverviewComponent,
    BottomLeftChartComponent,
    BottomRightChartMemberComponent,
    BottomRightChartBloodGroupComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,

    ChartsModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatDatepickerModule,
    MatIconModule,
    MatTabsModule,
    MatMomentDateModule
  ]
})
export class DashboardModule { }
