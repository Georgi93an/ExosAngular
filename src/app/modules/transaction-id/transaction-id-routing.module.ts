import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionIdComponent } from './transaction-id/transaction-id.component';

const routes: Routes = [
  {
    path: 'transaction/:id',
    component: TransactionIdComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionIdRoutingModule { }
