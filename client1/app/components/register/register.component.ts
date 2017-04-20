import { Component } from '@angular/core';
//import { LoginService } from '../../services/login_services/login.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-register',
  templateUrl: 'register.component.html' 
})

export class RegisterComponent { 
  data = {};
  constructor(
    private router: Router   ){ }

  formSubmit(){
    if(this.data.uname == "harsha" && this.data.pswd == "123" && this.data.gender == "male"
    && this.data.mailId == "harsha@gmail.com" && this.data.city == "chicago"){
      this.router.navigate(['/login']);
    }else{
      console.log('Failed!!');
    }
  }
}