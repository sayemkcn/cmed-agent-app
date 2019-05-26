import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TypeListComponent} from './typelist/typelist.component';
import {AgentTypesRoutingModule} from './agenttypes-routing.module';

@NgModule({
  declarations: [TypeListComponent],
  imports: [
    CommonModule,
    AgentTypesRoutingModule
  ]
})
export class AgentTypesModule {
}
