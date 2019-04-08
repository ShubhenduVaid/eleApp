import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DetailService } from '../detail.service';
import { DetailData, StatsData, StatsObj } from '../detail.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  private id: number;

  detailData: DetailData;
  statsResponse: StatsObj[] = [];
  constructor(
    private route: ActivatedRoute,
    private detailService: DetailService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.detailService.getElevatorDetailByID(this.id)
      .subscribe(
        (data: DetailData) => {
          this.detailData = data;
          this.elevatorStats(this.id);
        },
        (error) => {
          this.openSnackBar('Unable to fetch elevator details.');
        }
      );
  }

  elevatorStats(id: number) {
    this.detailService.getElevatorStatsByID(this.id)
      .subscribe(
        (data: StatsData) => {
          if (data && data.stats) {
            const keysList = Object.keys(data.stats);
            const statDataList: StatsObj[] = [];
            keysList.forEach(element => {
              const tempObj: StatsObj = { name: '', value: '' };
              tempObj.name = element;
              tempObj.value = data.stats[element];
              statDataList.push(tempObj);
            });
            this.statsResponse = [...statDataList];
          }
        },
        (error) => {
          this.openSnackBar('Unable to fetch elevator stats.');
        }
      );
  }

  onEditDetail(row: DetailData) {
    this.detailService.editElevatorDetailsByID(row)
      .subscribe(
        (data: DetailData) => {
          this.detailData = data;
          this.elevatorStats(this.id);
        },
        (error) => {
          this.openSnackBar('Unable to edit elevator details.');
        }
      );
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }

}
