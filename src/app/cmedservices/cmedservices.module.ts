import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServiceListComponent} from './servicelist/servicelist.component';
import {CmedServicesRoutingModule} from './cmedservices-routing.module';
import {CmedServicesService} from './services/cmedservices.service';

@NgModule({
  declarations: [ServiceListComponent],
  imports: [
    CommonModule,
    CmedServicesRoutingModule
  ],
  providers: [
    CmedServicesService
  ]
})
export class CmedServicesModule {
}
