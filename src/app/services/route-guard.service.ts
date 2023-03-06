import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { JwtAuthenticationService } from './jwt-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(
    private jwtAuthenticationService: JwtAuthenticationService,
    private router: Router) {

  }

  canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) {
    if (this.jwtAuthenticationService.isUserLoggedIn()){
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }

}
