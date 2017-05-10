import { Component, Output, EventEmitter } from '@angular/core';
import { Router} from '@angular/router';
import { LoginService } from '../../services/login_services/login.service';
import { OrderService } from '../../services/orders_service/orders.service';
import {CartService} from '../../services/cart_service/cart.service';
import { InventoryService } from '../../services/inventory_services/inventory.service';
import { Users } from '../../../Users';
import { Orders } from '../../../Orders';


@Component({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: 'home.component.html'
})


export class HomeComponent{
    loggedInUser: Users;
    public invId;
    id: Users;
    qty: any;
    orders: Orders[];
    users: Users[];
    name: string;
    constructor(
    private loginService:LoginService,
    private orderService:OrderService,
    private inventoryService: InventoryService,
    private cartService: CartService,
    ) {
        this.loggedInUser = JSON.parse(localStorage.getItem('currUser'));
        this.orderService.getOrders(this.loggedInUser.id)
            .subscribe(orders => {
                this.orders = orders; 
            });
        
 

    }

   

    getProfile(name){
        this.loginService.getUser(name).subscribe(users => {
          this.users = users;
      });
    }


   
}


