import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helloname',
  templateUrl: './helloname.component.html',
  styleUrls: ['./helloname.component.css']
})
export class HellonameComponent implements OnInit {

  greeting="Name"
  userName: string="";
  fontSize:number=16;
  fonts: string[]=[
    'Arial',
    'Calibri',
    'Times-Roman',
    'Comic Sans MS',
    'Impact',
    'Verdana',
    'Geneva',
    'Cambria'
  ];
  alignLeft: boolean=false;
  alignCenter: boolean=false;
  alignRight: boolean=false;
  constructor() { }

  ngOnInit() {}


  toUpper(){
    this.greeting=this.userName.toUpperCase();
  }
  
}
