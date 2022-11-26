import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex9',
  templateUrl: './ex9.component.html',
  styleUrls: ['./ex9.component.css']
})
export class Ex9Component implements OnInit {

  myText = "HELLO THERE. MAKE ME RENDER IN LOWER CASE";

  myText1 = "this title should be in title case";

  theDate: Date = new Date(2035, 3, 1, 14, 15);

  constructor() { }

  ngOnInit(): void {
  }

}
