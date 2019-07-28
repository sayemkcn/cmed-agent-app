import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {StatsComponent} from './Home/stats/stats.component';


const routes: Route[] = [
  {path: '', component: StatsComponent},
  {path: 'home', component: StatsComponent},

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule {

}
