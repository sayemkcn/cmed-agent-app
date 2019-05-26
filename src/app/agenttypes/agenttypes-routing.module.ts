import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {TypeListComponent} from './typelist/typelist.component';

const routes: Route[] = [
  {path: '', component: TypeListComponent}
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
