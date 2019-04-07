import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const LOGIN_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }
];

export const LoginRouter = RouterModule.forChild(LOGIN_ROUTES);
