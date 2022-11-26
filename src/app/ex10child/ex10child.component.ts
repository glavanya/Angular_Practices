import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ex10child',
  templateUrl: './ex10child.component.html',
  styleUrls: ['./ex10child.component.css']
})
export class Ex10childComponent implements OnChanges {

  
 @Input()quantity: any;
 squaredQuantity: any;

  constructor() { }
  
  ngOnChanges() {
    this.squaredQuantity = this.quantity * this.quantity;
    console.log(this.squaredQuantity)
  }

  ngOnInit(): void {
  }

}
