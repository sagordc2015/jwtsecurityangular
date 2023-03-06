import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LoginService } from 'src/app/services/login.service';

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  implements OnInit{
  users: IUser[] = [];
  searchString = '';

  map: any;
  // dataSource: any;
  public displayedColumns = ['id', 'firstName', 'lastName', 'email', 'password' ];
  public dataSource = new MatTableDataSource<IUser>();

  constructor(
    private loginService: LoginService){
    
  }

  ngOnInit(): void {
    // console.log(sessionStorage.getItem('token'));
    this.loginService.showUsers().subscribe(data => {
    //  console.log(data);
     this.map = data;
     this.users = this.map;
     console.log(this.users);
    //  this.dataSource = this.map;
     this.dataSource.data = this.users;
    });
  }

}
