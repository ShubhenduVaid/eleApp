import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthService } from '../core/auth.service';
import { DetailData, StatsData } from './detail.model';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getElevatorDetailByID(id: number): Observable<DetailData> {
    const url = `elevator/${id}`;
    return this.http.get<DetailData>(url, this.authService.getHeader())
      .pipe(
        catchError(this.handleError)
      );
  }

  getElevatorStatsByID(id: number): Observable<StatsData> {
    const url = `elevator-stats/${id}`;
    return this.http.get<StatsData>(url, this.authService.getHeader())
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError() {
    return throwError('Unable to fetch data. Try Again.');
  }
}
