import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {AppComponent} from './app.component';
import {TasksComponent} from './components/tasks/tasks.component';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './components/login/login.component';


@NgModule({
  imports: [ BrowserModule, HttpModule, FormsModule ],
  declarations: [AppComponent , TasksComponent, LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }