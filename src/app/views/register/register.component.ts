import { Component } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private registrService: RegisterService){
    
  }

  add(data: any){
    console.warn(data);
    this.registrService.add(data);
  }
}
