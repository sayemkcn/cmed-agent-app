import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {ServiceListComponent} from './components/servicelist/servicelist.component';
import {CreateServiceComponent} from './components/create-service/create-service.component';

const routes: Route[] = [
  {path: '', component: ServiceListComponent},
  {path: 'create', component: CreateServiceComponent}
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
