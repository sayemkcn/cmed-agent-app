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
import {Toastr} from './shared/toastr.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'top-right',
      closeButton: true
    })
  ],
  providers: [
    AuthService,
    Toastr
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
