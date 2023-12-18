import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { DataPribadiComponent } from './component/data-pribadi/data-pribadi.component';



@NgModule({
  declarations: [
    HeaderComponent,
    DataPribadiComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
