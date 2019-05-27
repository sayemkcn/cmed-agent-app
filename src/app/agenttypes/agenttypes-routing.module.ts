import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {TypeListComponent} from './components/typelist/typelist.component';
import {CreateAgentTypeComponent} from './components/create-agent-type/create-agent-type.component';

const routes: Route[] = [
  {path: '', component: TypeListComponent},
  {path: 'create', component: CreateAgentTypeComponent},
  {path: 'edit/:id', component: CreateAgentTypeComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AgentTypesRoutingModule {

}
