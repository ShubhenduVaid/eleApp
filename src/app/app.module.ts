import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ElevatorInterceptor } from './core/elevator-interceptor.service';
import { LoginModule } from './login/login.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    LoginModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ElevatorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
