import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {AgentListComponent} from './components/agentlist/agentlist.component';
import {CreateAgentComponent} from './components/create-agent/create-agent.component';
import {RefillComponent} from './components/refill/refill.component';

const routes: Route[] = [
  {path: '', component: AgentListComponent},
  {path: 'create', component: CreateAgentComponent},
  {path: 'edit/:id', component: CreateAgentComponent},
  {path: 'refill/:id', component: RefillComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AgentsRoutingModule {

}
