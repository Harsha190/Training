import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
 
@Injectable()
export class InventoryService {
    constructor(private http: Http) { }
 
    getAllInventoryList(){ 
        return this.http.get('/inventory/all')
                .map( res=> res.json() );      
    }

   getAllBooks(){ 
        return this.http.get('/inventory/books/all')
                .map( res=> res.json() );      
    }

   getAllClothing(){
        return this.http.get('/inventory/clothing/all')
                .map( res=> res.json() ); 

   }
   getAllEntertainment(){
        return this.http.get('/inventory/entertainment/all')
                .map( res=> res.json() ); 

   }
   getAllStationary(){
        return this.http.get('/inventory/stationary/all')
                .map( res=> res.json() ); 

   }
   getAllApparells(){
        return this.http.get('/inventory/apparells/all')
                .map( res=> res.json() ); 

   }

   getInventorys(invId){
           return this.http.get('/inventory/'+invId+'/all')
                .map( res=> res.json() ); 
   }
}