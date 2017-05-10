import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {AuthenticationService} from '../authenticationService/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private authService:AuthenticationService, private router:Router){

  }

  canActivate(){
    if(this.authService.isLoggedIn()){
      return true;
    } else {
      this.router.navigate(['/welcome']);
      return false;
    }
  }
}