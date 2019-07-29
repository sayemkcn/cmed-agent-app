import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveEmployeeStatusReportComponent } from './components/active-employee-status-report/active-employee-status-report.component';
import { AllMeasurementsReportComponent } from './components/all-measurements-report/all-measurements-report.component';
import { DaywiseHealthReportComponent } from './components/daywise-health-report/daywise-health-report.component';
import { EmployeeListDetailedReportComponent } from './components/employee-list-detailed-report/employee-list-detailed-report.component';
import { EmployeeRegistrationReportComponent } from './components/employee-registration-report/employee-registration-report.component';
import { HealthStatusReportComponent } from './components/health-status-report/health-status-report.component';
import { ReportsListComponent } from './components/reports-list/reports-list.component';
import { ServiceProviderReportComponent } from './components/service-provider-report/service-provider-report.component';
import { ReportComponent } from './components/report/report.component';
import {ReportsRoutingModule} from "./reports-routing.module";



@NgModule({
  declarations: [ActiveEmployeeStatusReportComponent,
    AllMeasurementsReportComponent,
    DaywiseHealthReportComponent,
    EmployeeListDetailedReportComponent,
    EmployeeRegistrationReportComponent,
    HealthStatusReportComponent,
    ReportsListComponent,
    ServiceProviderReportComponent,
    ReportComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
