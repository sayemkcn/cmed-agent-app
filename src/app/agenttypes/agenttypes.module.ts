import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TypeListComponent} from './components/typelist/typelist.component';
import {AgentTypesRoutingModule} from './agenttypes-routing.module';
import {AgentTypeService} from './services/agent-type.service';
import {CreateAgentTypeComponent} from './components/create-agent-type/create-agent-type.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [TypeListComponent, CreateAgentTypeComponent],
  imports: [
    CommonModule,
    AgentTypesRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AgentTypeService]
})
export class AgentTypesModule {
}
