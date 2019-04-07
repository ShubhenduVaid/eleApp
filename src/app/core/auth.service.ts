import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // TODO : Take into account refresh token and better checking mechanism
  isAuthenticated() {
    return (this.getToken() === false) ? false : true;
  }

  // TODO : Encrypt before storing
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    const token = localStorage.getItem('token');
    if (token !== null && token !== undefined) {
      return token;
    }
    return false;
  }
}
