import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.css']
})
export class Ex1Component implements OnInit {

  event:any={
    name:"ngConf2025",
    date:3/1/2025,
    time:"8am",
    address:{
      location:"123 Main St,Salt Lake",
      city: "UT",
      country:"USA"
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
