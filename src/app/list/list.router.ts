import { Routes, RouterModule } from '@angular/router';

import { ListPageComponent } from './list-page/list-page.component';

const LIST_ROUTES: Routes = [
  {
    path: '',
    component: ListPageComponent
  }
];

export const ListRouter = RouterModule.forChild(LIST_ROUTES);
