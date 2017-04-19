import { Component } from '@angular/core';
import { LoginService } from '../../services/login_services/login.service';
import { Users } from '../../../Users';


@Component({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: 'home.component.html'
})

export class HomeComponent {
    currentUser: Users;
    users: Users[];
    name: string;
    constructor(private loginService:LoginService ) {
        this.currentUser = JSON.parse(localStorage.getItem('currUser'));
        this.loginService.getUsers()
            .subscribe(users => {
                this.users = users;
            });
    }

    getProfile(name){
        this.loginService.getUser(name).subscribe(users => {
          this.users = users;
      });
    }


   
}


