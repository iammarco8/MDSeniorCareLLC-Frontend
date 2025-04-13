import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { MiddleComponent } from './partials/middle/middle.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SecondMiddleComponent } from './partials/second-middle/second-middle.component';
import { ThirdMiddleComponent } from './partials/third-middle/third-middle.component';
import { DashboardComponent } from './partials/dashboard/dashboard.component';
import { LoginComponent } from './partials/login/login.component';
import { TokenInterceptor } from './shared/interceptor/token.interceptor';
import { LogoutComponent } from './partials/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MiddleComponent,
    SecondMiddleComponent,
    ThirdMiddleComponent,
    DashboardComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
