import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TransactionsId } from 'src/app/core/transactionid.model';


@Component({
  selector: 'app-transaction-id',
  templateUrl: './transaction-id.component.html',
  styleUrls: ['./transaction-id.component.css']
})
export class TransactionIdComponent {
  selected!: TransactionsId;
  currentTime: Date=new Date();

  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get<TransactionsId>(`./assets/${id}.json`).subscribe(data => {
      this.selected = data;
      this.currentTime = new Date();
      setInterval(() => {
        this.currentTime = new Date();
      }, 1000);
    });
  }
}





