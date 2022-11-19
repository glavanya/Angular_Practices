import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex3',
  templateUrl: './ex3.component.html',
  styleUrls: ['./ex3.component.css']
})
export class Ex3Component implements OnInit {

  currentCounter:any;
  
  Handlechildbuttonclick(value:any){
    this.currentCounter=value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
