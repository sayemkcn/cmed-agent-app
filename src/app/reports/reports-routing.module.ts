import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {ReportComponent} from "./components/report/report.component";


const routes: Route[] = [
  {path: '', component:ReportComponent},
  {path: 'reports', component:ReportComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ReportsRoutingModule{

}
