import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  firstnum:number=0;
  secondnum:number=0;
  result:number=0;
  operator:string="+";
  history: {time: number, operation: string, result: number}[] = [];

  ngOnInit(){}

  constructor(){}

  calculate(){

    switch(this.operator){
     case '+':
     this.result = this.firstnum + this.secondnum;
     break;
     case '-':
     this.result = this.firstnum - this.secondnum;
     break;
     case'*':
     this.result = this.firstnum * this.secondnum;
     break;
     case'/':
     this.result = this.firstnum / this.secondnum;
     break;
    }

    this.history.unshift({
      time: Date.now(),
      operation: this.firstnum + " " + this.operator + " " + this.secondnum,
      result: this.result
    });
  }

  clearHistory(index: number) {
    this.history.splice(index, 1);
    
  }
}


