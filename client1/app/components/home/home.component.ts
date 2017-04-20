import { Component } from '@angular/core';
import { LoginService } from '../../services/login_services/login.service';
import { OrderService } from '../../services/orders_service/orders.service';
import { Users } from '../../../Users';
import { Orders } from '../../../Orders';


@Component({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: 'home.component.html'
})

export class HomeComponent {
    currentUser: Users;
    id: Users;
    orders: Orders[];
    users: Users[];
    name: string;
    constructor(private loginService:LoginService,
    private orderService:OrderService 
    ) {
        this.currentUser = JSON.parse(localStorage.getItem('currUser'));
        this.orderService.getOrders(this.currentUser.id)
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


