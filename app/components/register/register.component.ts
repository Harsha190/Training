import { Component } from '@angular/core';
//import { LoginService } from '../../services/login_services/login.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-register',
  templateUrl: 'register.component.html' 
})

export class RegisterComponent { 
  data = {
  };
  constructor(
    private router: Router   ){ }

  formSubmit(){
   
  }
}