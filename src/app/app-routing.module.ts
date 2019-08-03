import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {LogoutComponent} from './auth/logout/logout.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},


  {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: 'employees', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)},
  {path: 'reports', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule)},

  {path: 'services', loadChildren: () => import('./cmedservices/cmedservices.module').then(m => m.CmedServicesModule)},
  {path: 'agent-types', loadChildren: () => import('./agenttypes/agenttypes.module').then(m => m.AgentTypesModule)},
  {path: 'agents', loadChildren: () => import('./agents/agents.module').then(m => m.AgentsModule)},
  {path: 'logout', component: LogoutComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
