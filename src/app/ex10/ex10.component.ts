import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex10',
  templateUrl: './ex10.component.html',
  styleUrls: ['./ex10.component.css']
})
export class Ex10Component implements OnInit {

  myQuantity:number = 1;
  constructor() { }

  ngOnInit(): void {
  }
  updateQuantity() {
    this.myQuantity++;
  }

}
