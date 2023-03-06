import { Component, OnInit } from '@angular/core';
import { JwtAuthenticationService } from 'src/app/services/jwt-authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(
    public jwtAuthenticationService: JwtAuthenticationService){
    
  }

  ngOnInit() {

  }

  logout(){
    this.jwtAuthenticationService.logOut();
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
