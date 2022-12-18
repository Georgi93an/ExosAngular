import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Transactions} from 'src/app/core/transactions.model';


@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  
  sortColumn: string="";
  sortDirection: 'asc' | 'desc' = 'asc';


  transactions: Array<Transactions> = [];

  currentTime: Date=new Date();
  constructor(private http: HttpClient, private router: Router) { 
    };
  
  ngOnInit() {
    this.http.get<Array<Transactions>>('./assets/transactions.json').subscribe(data => {
      this.transactions = data;
      this.currentTime = new Date();
      setInterval(() => {
        this.currentTime = new Date();
      }, 1000);
    });
   
  }
  onTransactionClick(transaction: Transactions) {
    this.router.navigate(['/transaction', transaction.id]);
  }

  sort(column: string) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    this.transactions.sort((a, b) => {
      if (a[column] < b[column]) {
        return this.sortDirection === 'asc' ? -1 : 1;
      }
      if (a[column] > b[column]) {
        return this.sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }
}

