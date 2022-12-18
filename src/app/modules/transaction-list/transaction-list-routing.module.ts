import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionIdComponent } from '../transaction-id/transaction-id/transaction-id.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';

const routes: Routes = [
{
  path: 'transactions',
  component: TransactionListComponent,
  
}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionListRoutingModule { }
