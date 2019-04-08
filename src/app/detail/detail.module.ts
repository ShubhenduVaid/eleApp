import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { SharedModule } from '../shared/shared.module';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { DetailRouter } from './detail.router';
import { DetailGridComponent } from './detail-grid/detail-grid.component';
import { DetailGraphComponent } from './detail-graph/detail-graph.component';
import { DetailEditComponent } from './detail-edit/detail-edit.component';

@NgModule({
  declarations: [
    DetailPageComponent,
    DetailGridComponent,
    DetailGraphComponent,
    DetailEditComponent
  ],
  imports: [
    SharedModule,
    DetailRouter,
    NgxChartsModule
  ],
  entryComponents: [
    DetailEditComponent
  ]
})
export class DetailModule { }
