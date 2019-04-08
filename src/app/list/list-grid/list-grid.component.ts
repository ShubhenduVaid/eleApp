import { Component, ViewChild, Input, AfterViewChecked, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { ElevatorObj, ListData } from '../list.model';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-grid',
  templateUrl: './list-grid.component.html',
  styleUrls: ['./list-grid.component.css']
})
export class ListGridComponent {

  constructor(private router: Router) { }

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

  onRowClick(id: number) {
    this.router.navigate([`/detail/${id}`]);
  }
}
