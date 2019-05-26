import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {ServiceListComponent} from './servicelist/servicelist.component';

const routes: Route[] = [
  {path: '', component: ServiceListComponent},
  {path: 'create', component: ServiceListComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CmedServicesRoutingModule {
}
