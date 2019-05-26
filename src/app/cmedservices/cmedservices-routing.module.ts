import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {ServicelistComponent} from './servicelist/servicelist.component';

const routes: Route[] = [
  {path: '', component: ServicelistComponent}
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
