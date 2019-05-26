import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServicelistComponent} from './servicelist/servicelist.component';
import {CmedServicesRoutingModule} from './cmedservices-routing.module';

@NgModule({
  declarations: [ServicelistComponent],
  imports: [
    CommonModule,
    CmedServicesRoutingModule
  ]
})
export class CmedServicesModule {
}
