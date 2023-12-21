import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import { FooterModule } from '../public-api';
import { HeaderComponent } from './header.component';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
