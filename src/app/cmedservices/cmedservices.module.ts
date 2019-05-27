import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServiceListComponent} from './components/servicelist/servicelist.component';
import {CmedServicesRoutingModule} from './cmedservices-routing.module';
import {CmedServicesService} from './services/cmedservices.service';
import { CreateServiceComponent } from './components/create-service/create-service.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ServiceListComponent, CreateServiceComponent],
  imports: [
    CommonModule,
    CmedServicesRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    CmedServicesService
  ]
})
export class CmedServicesModule {
}
