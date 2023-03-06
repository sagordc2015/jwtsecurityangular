import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JwtAuthenticationService {

  constructor(private router: Router) { }

  getAuthenticatedUser() {
    return sessionStorage.getItem('token');
  }

  getAuthenticatedToken(): any {
    if(this.getAuthenticatedUser())
    return sessionStorage.getItem('token');
  }

  isUserLoggedIn() {
    return !(sessionStorage.getItem('token') === null);
  }

  logOut() {
    sessionStorage.removeItem('token');
  }
}
