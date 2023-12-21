import { NgModule } from '@angular/core';
import { FooterModule } from '../public-api';
import { HeaderComponent } from './header.component';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    FooterModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
