import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionListRoutingModule } from './transaction-list-routing.module';
import { TransactionListComponent } from './transaction-list/transaction-list.component';


@NgModule({
  declarations: [
    TransactionListComponent
  ],
  imports: [
    CommonModule,
    TransactionListRoutingModule,
  ],
  exports: [
    TransactionListComponent]

})
export class TransactionListModule { }
