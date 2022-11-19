import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.css']
})
export class Ex2Component implements OnInit {

  event:any={
    name:"ngConf2025",
    date: "3/1/2025",
    time:"8am",
    location:{
      address:'123 Main St',
      city:"Salt Lake City, UT",
      country:"USA"
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
