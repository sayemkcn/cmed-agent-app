import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {StatsComponent} from './components/stats/stats.component';
import {EmployeesComponent} from "./employees/employees.component";

const routes: Route[] = [
  {path: '', component: StatsComponent},
  {path: 'home', component: StatsComponent},
  {path: 'employee', component: EmployeesComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule {

}
