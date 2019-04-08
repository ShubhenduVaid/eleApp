import { Component, OnInit, Input } from '@angular/core';

import { StatsObj } from '../detail.model';

@Component({
  selector: 'app-detail-graph',
  templateUrl: './detail-graph.component.html',
  styleUrls: ['./detail-graph.component.css']
})
export class DetailGraphComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  private _statsResponse;

  @Input()
  set statsResponse(statsResponse: StatsObj[]) {
    if (statsResponse.length > 0) {
      this._statsResponse = statsResponse;
    }
  }

  get statsResponse() {
    return this._statsResponse;
  }

  view: any[] = [900, 450];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Date';
  showYAxisLabel = true;
  yAxisLabel = 'Availablity Percentage';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#BB00AA']
  };

  constructor() { }

  ngOnInit() {
  }

}
