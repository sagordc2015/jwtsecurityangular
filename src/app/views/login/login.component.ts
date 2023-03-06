import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtAuthenticationService } from 'src/app/services/jwt-authentication.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  map: any;

  constructor(
    private loginService: LoginService, 
    private router: Router,
    private jwtAuthenticateService: JwtAuthenticationService
    )
    {
    
    }

  ngOnInit() {
    this.jwtAuthenticateService.logOut();
  }

  userLogin(loginData: any){
    console.log(loginData);
    this.loginService.login(loginData).subscribe(data =>{
      this.map = data;
      console.log(this.map.token);
      sessionStorage.setItem('token', `Bearer ${this.map.token}`);
      sessionStorage.setItem('token', this.map.token);
      this.router.navigate(['/profile']);
    });

  }

  goRegister(){
    this.router.navigate(['/register']);
  }
}
