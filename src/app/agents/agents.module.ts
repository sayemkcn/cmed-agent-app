import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AgentListComponent} from './components/agentlist/agentlist.component';
import {AgentsRoutingModule} from './agents-routing.module';
import {AgentService} from './services/agent-service.service';
import {CreateAgentComponent} from './components/create-agent/create-agent.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule, MatInputModule} from '@angular/material';
import { RefillComponent } from './components/refill/refill.component';

@NgModule({
    declarations: [
      AgentListComponent,
      CreateAgentComponent,
      RefillComponent
    ],
    imports: [
      CommonModule,
      AgentsRoutingModule,
      ReactiveFormsModule,
      MatAutocompleteModule,
      MatInputModule
    ],
    providers: [
      AgentService
    ]
  }
)
export class AgentsModule {
}
