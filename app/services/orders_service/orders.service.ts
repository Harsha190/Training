import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService{
    constructor(private http:Http){
    }

     getOrders(id){
        return this.http.get('/customers/'+id+'/orders')
                .map(res => res.json());
    }

    getOrderDetails(id){
        return this.http.get('/orders/one/'+id)
                .map(res => res.json());
    }
}