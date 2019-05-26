import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {AgentListComponent} from './agentlist/agentlist.component';

const routes: Route[] = [
  {path: '', component: AgentListComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AgentsRoutingModule {

}
