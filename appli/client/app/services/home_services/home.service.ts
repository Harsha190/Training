import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeService{
    constructor(private http:Http){
        console.log('Home Service Initialized.....');
    }

    getUsers(){
        return this.http.get('/customers/all')
                .map(res => res.json());
    }

    getUser(id){
        return this.http.get('/customers/one'+id)
                .map(res => res.json());
    }


}