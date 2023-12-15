import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { BrowserModule } from '@angular/platform-browser';
import { LoginRoutingModule } from './login-routing.module';
import { LogoutComponent } from '../logout/logout.component';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [
    LoginComponent, LogoutComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    HeaderModule
  ],
  exports: [LogoutComponent]
})
export class LoginModule { }
