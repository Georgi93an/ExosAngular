import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionListModule } from "./modules/transaction-list/transaction-list.module";
import { TransactionIdModule } from './modules/transaction-id/transaction-id.module';
import { HellonameModule } from './modules/helloname/helloname.module';
import { CalculatorModule } from './modules/calculator/calculator.module';
import { RouterModule } from '@angular/router';
@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        TransactionListModule,
        TransactionIdModule,
        HttpClientModule,
        HellonameModule,
        CalculatorModule,
        RouterModule
        
    ]
})
export class AppModule { }
