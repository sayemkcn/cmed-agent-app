import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './auth/login/login.component';
import {AuthService} from './auth/shared/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {NavComponent} from './layouts/nav/nav.component';
import {FooterComponent} from './layouts/footer/footer.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {Toastr} from './shared/services/toastr.service';
import { LogoutComponent } from './auth/logout/logout.component';
import {ApiEndpoints} from './shared/commons/api-endpoints.resource';
import { BaseComponent } from './shared/base/base.component';
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import {HttpModule} from '@angular/http';
import { DxChartModule } from 'devextreme-angular';

// import {PatientInfoService, Service} from './dashboard/service/patient-info.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    FooterComponent,
    LogoutComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatMomentDateModule,
    DxChartModule,
    HttpModule,

    ToastrModule.forRoot({
      closeButton: true,
      progressBar: true,
      progressAnimation: 'increasing',
    }),


  ],
  providers: [
    AuthService,
    Toastr,
    ApiEndpoints,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
