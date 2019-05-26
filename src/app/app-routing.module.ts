import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {LogoutComponent} from './auth/logout/logout.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'services', loadChildren: './cmedservices/cmedservices.module#CmedServicesModule'},
  {path: 'agent-types', loadChildren: './agenttypes/agenttypes.module#AgentTypesModule'},
  {path: 'agents', loadChildren: './agents/agents.module#AgentsModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
