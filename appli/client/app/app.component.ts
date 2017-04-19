import { Component } from '@angular/core';
import {TaskService} from './services/task.service';
import {LoginService} from './services/login_services/login.service';
import {HomeService} from './services/home_services/home.service';
import { Router } from '@angular/router'; 
import { Routes, RouterModule} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [TaskService, LoginService, HomeService] 
})

export class AppComponent { }