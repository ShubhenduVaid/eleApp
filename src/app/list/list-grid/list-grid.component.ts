import { Component, ViewChild, Input, AfterViewChecked, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { ElevatorObj, ListData } from '../list.model';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-list-grid',
  templateUrl: './list-grid.component.html',
  styleUrls: ['./list-grid.component.css']
})
export class ListGridComponent {
  dataSource: MatTableDataSource<ElevatorObj>;
  displayedColumns: string[] = [
    'id',
    'buildingName',
    'elevatorCode',
    'statusCode',
    'statusDescription',
    'lastUpdated'
  ];

  @Output() changeEvent = new EventEmitter<any>();

  @Input()
  set listData(data: ListData) {
    if (data && data.elevators) {
      this.dataSource = new MatTableDataSource<ElevatorObj>(data.elevators);
      this.paginator.pageSize = data.rbody.pageSize;
      this.paginator.length = data.count;
    }
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  changePage(event: any) {
    this.changeEvent.emit(event);
  }
}
