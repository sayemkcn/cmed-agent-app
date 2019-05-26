import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AgentListComponent} from './agentlist/agentlist.component';
import {AgentsRoutingModule} from './agents-routing.module';
import {AgentService} from './services/agent-service.service';

@NgModule({
    declarations: [
      AgentListComponent
    ],
    imports: [
      CommonModule,
      AgentsRoutingModule
    ],
    providers: [
      AgentService
    ]
  }
)
export class AgentsModule {
}
