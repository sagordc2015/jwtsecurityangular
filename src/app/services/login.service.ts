import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from '../app-settings';
import { IUser } from '../views/dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token: any;

  constructor(private http: HttpClient) { }

  login(data: any){
    return this.http.post(AppSettings.API_URL + '/authenticate', data);
  }

  showUsers(){
    return this.http.get<IUser>(AppSettings.API_URL+'/allUsers');
  }
}
