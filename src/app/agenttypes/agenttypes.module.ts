import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TypeListComponent} from './typelist/typelist.component';
import {AgentTypesRoutingModule} from './agenttypes-routing.module';
import {AgentTypeService} from './services/agent-type.service';

@NgModule({
  declarations: [TypeListComponent],
  imports: [
    CommonModule,
    AgentTypesRoutingModule
  ],
  providers: [AgentTypeService]
})
export class AgentTypesModule {
}
