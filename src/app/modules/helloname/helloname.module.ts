import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HellonameRoutingModule } from './helloname-routing.module';
import { HellonameComponent } from './helloname/helloname.component';


@NgModule({
  declarations: [
    HellonameComponent
  ],
  imports: [
    CommonModule,
    HellonameRoutingModule,
    FormsModule
  ]
  ,exports:[
    HellonameComponent
  ]
})
export class HellonameModule { }
