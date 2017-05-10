import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/orders_service/orders.service';
import { CartService } from '../../services/cart_service/cart.service';
import { Item } from '../../../Item';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-shoppingcart',
  templateUrl: 'shoppingcart.component.html' 
})

export class ShoppingcartComponent implements OnInit{ 
  private cartItems: Item[] = [];
  private totalPrice: number = 0;
  private totalRewards: number = 0;
  constructor(
    private router: Router,
    private cartService: CartService   ){
        
    }

    ngOnInit(){
        this.cartItems = this.cartService.getQty();
        this.totalPrice = this.cartService.getTotalPrice();
        this.totalRewards = this.cartService.getRewards();
    }

    clearCart(cartItems){
        this.cartService.clearCart(cartItems);
        alert('Cart Cleared!!');
        this.router.navigate(['']);
    }

    removeItem(cartItem){
        this.cartItems = this.cartService.removeItem(cartItem);
        this.totalPrice = this.cartService.getTotalPrice();
        this.totalRewards = this.cartService.getRewards();
    }

  
}