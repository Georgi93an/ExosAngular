import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionIdRoutingModule } from './transaction-id-routing.module';
import { TransactionIdComponent } from './transaction-id/transaction-id.component';


@NgModule({
  declarations: [
    TransactionIdComponent
  ],
  imports: [
    CommonModule,
    TransactionIdRoutingModule,
  ],
  exports:[
    TransactionIdComponent
  ]

})
export class TransactionIdModule { }
