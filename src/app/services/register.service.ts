import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppSettings } from '../app-settings';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient, private router: Router) { 
    
  }

  add(data: any){
    console.warn(data);
    this.http.post<Object>(AppSettings.API_URL+'/register', data).subscribe((result: any)=>{
      console.warn(result);
      localStorage.setItem('token', result.token);
      this.router.navigate(['/']);
    });
  }
}
