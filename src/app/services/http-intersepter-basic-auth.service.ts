import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { JwtAuthenticationService } from './jwt-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntersepterBasicAuthService implements HttpInterceptor{

  constructor(
    private jwtAuthenticationService: JwtAuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    let jwtAuthHeaderString = this.jwtAuthenticationService.getAuthenticatedToken();

    if(jwtAuthHeaderString){
      request = request.clone({
        setHeaders : {
          Authorization: jwtAuthHeaderString
        }
      })
    }
    return next.handle(request);
  }

}