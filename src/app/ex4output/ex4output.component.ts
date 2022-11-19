import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ex4output',
  templateUrl: './ex4output.component.html',
  styleUrls: ['./ex4output.component.css']
})
export class Ex4outputComponent implements OnInit {

  counter:number=0;
  stopped:boolean=false;
  intervalId:any;
  @Output("stoptimer")stoptimer=new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  this.intervalId=setInterval(()=>{this.counter++},1000)
  }

stopTimer(){
  clearInterval(this.intervalId);
  this.stopped=true;
}
}

