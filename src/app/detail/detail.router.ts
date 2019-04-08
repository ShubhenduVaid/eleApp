import { Routes, RouterModule } from '@angular/router';

import { DetailPageComponent } from './detail-page/detail-page.component';

const DETAIL_ROUTES: Routes = [
  {
    path: '',
    component: DetailPageComponent
  }
];

export const DetailRouter = RouterModule.forChild(DETAIL_ROUTES);
