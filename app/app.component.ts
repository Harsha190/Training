import { Component, OnInit, OnDestroy, Directive } from '@angular/core';
import {TaskService} from './services/task.service';
import {LoginService} from './services/login_services/login.service';
import {HomeService} from './services/home_services/home.service';
import { AuthenticationService } from './services/authenticationService/authentication.service';
import {OrderService} from './services/orders_service/orders.service';
import {InventoryService} from './services/inventory_services/inventory.service';
import {CartService} from './services/cart_service/cart.service';
import {CommonService} from './services/common_services/common.service';
import { Router, Route, ActivatedRoute } from '@angular/router'; 
import { Routes, RouterModule} from '@angular/router';
import { Users } from '../../client/Users';
import { Orders } from '../../client/Orders';
import { Item } from '../../client/Item';
import { JwtHelper } from 'angular2-jwt';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [TaskService, LoginService, 
  HomeService, OrderService,
   AuthenticationService,InventoryService, 
   CartService,JwtHelper,CommonService]
})

export class AppComponent implements OnInit, OnDestroy{
  private loggedIn = false; 
  inventoryList : any;
  totalQuantity: number=0;
  orders: Orders[];
  cartItems: Item[] = null;
  currentUser: Users;
  loggedInUser: any;
  id: Users;
  constructor( private router: Router,
  private authenticationService: AuthenticationService,
  private orderService: OrderService,
  private inventoryService: InventoryService,
  private commonService: CommonService,
  private cartService: CartService){
    console.log('App Component Initialized...'); 
    this.inventoryService.getAllInventoryList()
            .subscribe(inventoryList =>{
                this.inventoryList = inventoryList;
            });
    
  }

  ngOnInit(){
  }

  ngOnDestroy(){
  }

  

  showCart(){
    console.log("Mouseover called");
    this.cartItems = this.cartService.getQty();
  }

   getOrders(){ 
     this.orderService.getOrders(this.commonService.getUserId())
            .subscribe(orders => {
                this.orders = orders; 
            });
   }

   logout(): void{
    this.authenticationService.logout();
    this.router.navigate(['']);
   }
 
}