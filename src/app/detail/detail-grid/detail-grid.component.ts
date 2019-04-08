import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { DetailData } from '../detail.model';

@Component({
  selector: 'app-detail-grid',
  templateUrl: './detail-grid.component.html',
  styleUrls: ['./detail-grid.component.css']
})
export class DetailGridComponent implements OnInit {

  dataSource: MatTableDataSource<DetailData>;

  displayedColumns: string[] = [
    'id',
    'buildingName',
    'elevatorCode',
    'statusCode',
    'statusDescription',
    'lastUpdated'
  ];

  @Input()
  set detailData(data: DetailData) {
    if (data) {
      const list = [data];
      this.dataSource = new MatTableDataSource<DetailData>(list);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
