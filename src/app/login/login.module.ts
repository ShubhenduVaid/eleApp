import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { LoginRouter } from './login.router';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    SharedModule,
    LoginRouter,
    ReactiveFormsModule,
  ]
})
export class LoginModule { }
