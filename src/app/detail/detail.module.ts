import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { SharedModule } from '../shared/shared.module';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { DetailRouter } from './detail.router';
import { DetailGridComponent } from './detail-grid/detail-grid.component';
import { DetailGraphComponent } from './detail-graph/detail-graph.component';

@NgModule({
  declarations: [DetailPageComponent, DetailGridComponent, DetailGraphComponent],
  imports: [
    SharedModule,
    DetailRouter,
    NgxChartsModule
  ]
})
export class DetailModule { }
