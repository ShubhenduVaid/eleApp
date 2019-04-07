import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ListRequest, ListData } from './list.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../core/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getList(body: ListRequest): Observable<ListData> {
    const url = `elevator/getall?pageSize=${body.pageSize}&pageNumber=${body.pageNumber}`;
    return this.http.get<ListData>(url, this.authService.getHeader())
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError() {
    return throwError('Unable to fetch data. Try Again.');
  }
}
