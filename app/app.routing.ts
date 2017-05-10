import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryDisplayComponent } from './components/inventoryDisplay/inventoryDisplay.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import {RegisterComponent} from './components/register/register.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ShoppingcartComponent } from './components/shoppingCart/shoppingcart.component';


const routes: Routes = [
    { path: 'home' , component: HomeComponent},
    { path: 'inventoryDisplay/:id' , component: InventoryDisplayComponent},
    { path: '' , component: WelcomeComponent},
    { path: 'login' , component: LoginComponent},
    { path: 'register' , component: RegisterComponent},
    { path: 'orderDetails/:id', component: OrdersComponent},
    { path: 'shoppingCart', component: ShoppingcartComponent},
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule]
})

export class AppRoutingModule {}