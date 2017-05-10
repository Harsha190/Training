import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login_services/login.service';
import { AuthenticationService } from '../../services/authenticationService/authentication.service';
import {CommonService} from '../../services/common_services/common.service';
import { Router } from '@angular/router';
import { Users } from '../../../Users';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html' 
})



export class LoginComponent{ 
  users: Users[];
  data = {
    uname: String,
    pswd: String
  };
  uname: string;
  pswd: string;
  loggedInUser: Users;
  constructor(
    private router: Router,
    private loginService:LoginService,
    private authenticationService: AuthenticationService,
    private commonService: CommonService   ){ 
      
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
                  this.loggedInUser = JSON.parse(localStorage.getItem('currUser'));
                  this.commonService.setName(currentUser.name);
                  this.commonService.setUserId(this.loggedInUser.id);
                  this.authenticationService.isLoggedIn();
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