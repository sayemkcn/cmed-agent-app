import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {StatsComponent} from './components/stats/stats.component';
import {EmployeesComponent} from "./employees/employees.component";
import {EmployeeInformationComponent} from "./employees/employee-information/employee-information.component";
import {RegisterEmployeeComponent} from "./employees/register-employee/register-employee.component";
import {InventoryComponent} from "./inventory/inventory.component";
import {ReportsComponent} from "./reports/reports.component";

const routes: Route[] = [
  {path: '', component: StatsComponent},
  {path: 'home', component: StatsComponent},
  {path: 'employee', component: EmployeesComponent},
  {path: 'employeesInformation', component: EmployeeInformationComponent},
  {path: 'employeesRegistration', component: RegisterEmployeeComponent},
  {path: 'inventory', component: InventoryComponent},
  {path: 'reports', component: ReportsComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule {

}
