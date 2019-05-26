import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AgentListComponent} from './agentlist/agentlist.component';
import {AgentsRoutingModule} from './agents-routing.module';

@NgModule({
    declarations: [
      AgentListComponent
    ],
    imports: [
      CommonModule,
      AgentsRoutingModule
    ],
  }
)
export class AgentsModule {
}
