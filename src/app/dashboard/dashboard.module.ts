import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import { StatsComponent } from './Home/stats/stats.component';
import { TopOverviewComponent } from './Home/top-overview/top-overview.component';
import { BottomLeftChartComponent } from './Home/bottom-left-chart/bottom-left-chart.component';
import { BottomRightChartMemberComponent } from './Home/bottom-right-chart-member/bottom-right-chart-member.component';
import { BottomRightChartBloodGroupComponent } from './Home/bottom-right-chart-blood-group/bottom-right-chart-blood-group.component';
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
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryListComponent } from './inventory/inventory-list/inventory-list.component';
import { InventoryListTableComponent } from './inventory/inventory-list-table/inventory-list-table.component';
import { InventorySearchComponent } from './inventory/inventory-search/inventory-search.component';
import { ReportsComponent } from './reports/reports.component';
import { ActiveEmployeeStatusReportComponent } from './reports/active-employee-status-report/active-employee-status-report.component';
import { AllMeasurementsReportComponent } from './reports/all-measurements-report/all-measurements-report.component';
import { DaywiseHealthReportComponent } from './reports/daywise-health-report/daywise-health-report.component';
import { EmployeeListDetailedReportComponent } from './reports/employee-list-detailed-report/employee-list-detailed-report.component';
import { EmployeeRegistrationReportComponent } from './reports/employee-registration-report/employee-registration-report.component';
import { HealthStatusReportComponent } from './reports/health-status-report/health-status-report.component';
import { ReportsListComponent } from './reports/reports-list/reports-list.component';
import { ServiceProviderReportComponent } from './reports/service-provider-report/service-provider-report.component';
import {DxChartModule} from "devextreme-angular";
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
    EmployeesComponent,
    InventoryComponent,
    InventoryListComponent,
    InventoryListTableComponent,
    InventorySearchComponent,
    ReportsComponent,
    ActiveEmployeeStatusReportComponent,
    AllMeasurementsReportComponent,
    DaywiseHealthReportComponent,
    EmployeeListDetailedReportComponent,
    EmployeeRegistrationReportComponent,
    HealthStatusReportComponent,
    ReportsListComponent,
    ServiceProviderReportComponent
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
    MatMomentDateModule,
    DxChartModule
  ]
})
export class DashboardModule { }
