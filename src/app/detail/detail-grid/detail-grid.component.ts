import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { DetailData } from '../detail.model';
import { MatDialog } from '@angular/material/dialog';
import { DetailEditComponent } from '../detail-edit/detail-edit.component';

@Component({
  selector: 'app-detail-grid',
  templateUrl: './detail-grid.component.html',
  styleUrls: ['./detail-grid.component.css']
})
export class DetailGridComponent {

  dataSource: MatTableDataSource<DetailData>;

  displayedColumns: string[] = [
    'id',
    'buildingName',
    'elevatorCode',
    'statusCode',
    'statusDescription',
    'lastUpdated',
    'action'
  ];

  @Output() editEvent = new EventEmitter<DetailData>();

  @Input()
  set detailData(data: DetailData) {
    if (data) {
      const list = [data];
      this.dataSource = new MatTableDataSource<DetailData>(list);
    }
  }

  constructor(public dialog: MatDialog) { }

  onEdit(row: DetailData) {
    this.openDialog(row);
  }

  openDialog(row: DetailData): void {
    const dialogRef = this.dialog.open(DetailEditComponent, {
      width: '250px',
      data: { ...row }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result !== 'Cancel') {
        this.editEvent.emit(result);
      }
    });
  }
}
