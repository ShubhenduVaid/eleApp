import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { LoginData, LoginRequest } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(body: LoginRequest): Observable<LoginData> {
    const url = 'token/login';
    return this.http.post<LoginData>(url, body)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError() {
    return throwError('Unable to login. Try Again.');
  }
}
