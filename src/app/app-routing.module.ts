import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login/login.component';
import { AuthGuard } from './core/auth-guard.service';

const routes: Routes = [
  {
    path: 'list',
    loadChildren: './../app/list/list.module#ListModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
