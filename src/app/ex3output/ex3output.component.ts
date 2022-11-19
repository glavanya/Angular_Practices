import { Component, EventEmitter, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-ex3output',
  templateUrl: './ex3output.component.html',
  styleUrls: ['./ex3output.component.css']
})
export class Ex3outputComponent implements OnInit {

  @Output("buttonclick")buttonclick= new EventEmitter;

    counter:number=0;
  
    constructor() { }

  ngOnInit(): void {
    
    setInterval(()=>{this.counter++},1000)
  }

  buttonclicked(){
    this.buttonclick.emit(this.counter)
  }
}
