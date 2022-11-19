import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex5',
  templateUrl: './ex5.component.html',
  styleUrls: ['./ex5.component.css']
})
export class Ex5Component implements OnInit {

  event:any={
    name:"ngConf2025",
    date:3/1/2025,
    time:"8am",
    location:{
      address:"123 Main St,Salt Lake",
      city: "UT",
      country:"USA"
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
