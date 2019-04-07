import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ListPageComponent } from './list-page/list-page.component';
import { ListRouter } from './list.router';
import { ListGridComponent } from './list-grid/list-grid.component';

@NgModule({
  declarations: [ListPageComponent, ListGridComponent],
  imports: [
    SharedModule,
    ListRouter
  ]
})
export class ListModule { }
