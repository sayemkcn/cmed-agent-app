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
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeInformationComponent } from './employees/employee-information/employee-information.component';
import { EmployeeListTableComponent } from './employees/employee-list-table/employee-list-table.component';
import { EmployeeSearchComponent } from './employees/employee-search/employee-search.component';
import { RegisterEmployeeComponent } from './employees/register-employee/register-employee.component';
import { EmployeesComponent } from './employees/employees.component';
@NgModule({
  declarations: [StatsComponent,
    TopOverviewComponent,
    BottomLeftChartComponent,
    BottomRightChartMemberComponent,
    BottomRightChartBloodGroupComponent,
    EmployeeListComponent,
    EmployeeInformationComponent,
    EmployeeListTableComponent,
    EmployeeSearchComponent,
    RegisterEmployeeComponent,
    EmployeesComponent
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
