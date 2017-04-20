import { Component } from '@angular/core';
import { LoginService } from '../../services/login_services/login.service';
import { Router } from '@angular/router';
import { Users } from '../../../Users';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html' 
})



export class LoginComponent { 
  users: Users[];
  data = {};
  uname: string;
  pswd: string;
  constructor(
    private router: Router,
    private loginService:LoginService    ){ 
      
    }

  getUser(event){
    event.preventDefault();
    var currentUser= {
        name: this.data.uname,
        password: this.data.pswd
    } 

    this.loginService.authenticateUser(currentUser.name,currentUser.password)
            .subscribe(
              data => {

                if (data.loginId ==  currentUser.name && data.password == currentUser.password){
                  localStorage.setItem('currUser', JSON.stringify(data))
                  this.router.navigate(['home']); 
                }
                else{
                  alert('Invalid User or Password!!');
               // this.users = users;
              }
            },
             error => {
                    alert('Failed!!!');
                });
  }
}