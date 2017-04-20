import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService{
    constructor(private http:Http){
        console.log('Order Service Initialized.....');
    }

     getOrders(id){
        return this.http.get('/customers/'+id+'/orders')
                .map(res => res.json());
    }
}