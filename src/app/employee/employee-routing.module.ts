import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {EmployeelistComponent} from "./components/employeelist/employeelist.component";
import {CreateEmployeeComponent} from "./components/create-employee/create-employee.component";

const routes: Route[] = [
  {path:'', component: EmployeelistComponent},
  {path: 'list', component: EmployeelistComponent},
  {path: 'create', component: CreateEmployeeComponent},
  {path: 'create/:id', component: CreateEmployeeComponent},

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule {

}
