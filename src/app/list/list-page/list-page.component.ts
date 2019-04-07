import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ListService } from '../list.service';
import { ListRequest, ListData } from '../list.model';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  paginationMetadata: ListRequest = {
    pageNumber: 0,
    pageSize: 15,
  };

  listData: ListData;
  constructor(
    private listService: ListService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.getElevatorList(this.paginationMetadata);
  }

  getElevatorList(paginationData: ListRequest) {
    this.listService.getList(paginationData)
      .subscribe(
        (data: ListData) => {
          data.rbody = paginationData;
          this.listData = data;
        },
        (error) => {
          this.openSnackBar('Unable to fetch elevator list.');
        }
      );
  }

  changePage(event: any) {
    const paginationMetadata: ListRequest = {
      pageNumber: event.pageIndex + 1,
      pageSize: event.pageSize,
    };
    this.getElevatorList(paginationMetadata);
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }
}
