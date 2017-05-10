import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { JwtHelper } from 'angular2-jwt';
 
@Injectable()
export class AuthenticationService {
    authToken: any;
    private loggedIn = false;
    id: number;
    constructor(private http: Http,
    private jwtHelper:JwtHelper) {    
     }
 
    logout() {
        this.authToken = null;
        localStorage.clear();
    }

    isLoggedIn(){
        const token = localStorage.getItem('currUser');
        this.authToken = token;
        if(this.authToken==null){
            return tokenNotExpired();
        }
        else{
            return !tokenNotExpired();
        }
        
    }

}