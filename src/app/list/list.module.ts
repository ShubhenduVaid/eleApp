import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ListPageComponent } from './list-page/list-page.component';
import { ListRouter } from './list.router';

@NgModule({
  declarations: [ListPageComponent],
  imports: [
    SharedModule,
    ListRouter
  ]
})
export class ListModule { }
