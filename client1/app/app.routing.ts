import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import {RegisterComponent} from './components/register/register.component';
import { OrdersComponent } from './components/orders/orders.component';


const routes: Routes = [
    { path: 'home' , component: HomeComponent},
    { path: '' , component: WelcomeComponent},
    { path: 'login' , component: LoginComponent},
    { path: 'register' , component: RegisterComponent},
    { path: 'orderDetails', component: OrdersComponent},
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule]
})

export class AppRoutingModule {}