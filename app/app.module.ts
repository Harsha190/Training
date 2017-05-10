import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {AppComponent} from './app.component';
import { AppRoutingModule } from './app.routing';
import {TasksComponent} from './components/tasks/tasks.component';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {RegisterComponent} from './components/register/register.component';
import {InventoryDisplayComponent} from './components/inventoryDisplay/inventoryDisplay.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ShoppingcartComponent } from './components/shoppingCart/shoppingcart.component';

@NgModule({
  imports: [ BrowserModule, HttpModule, FormsModule, AppRoutingModule ],
  declarations: [
  AppComponent ,
  TasksComponent, 
  LoginComponent, 
  HomeComponent, 
  RegisterComponent, 
  WelcomeComponent, 
  OrdersComponent,
  InventoryDisplayComponent,
  ShoppingcartComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }