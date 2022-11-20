import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex7',
  templateUrl: './ex7.component.html',
  styleUrls: ['./ex7.component.css']
})
export class Ex7Component implements OnInit {

  events = [
    {name:'Angular Connect', date: '9/26/2036', time: '10am'},
    {name:'ng-nl', date: '4/15/2037', time: '9am', location: {address: '127 DT ', city: 'Amsterdam', country: 'NL'}},
    {name:'ng-conf 2037', date: '4/15/2037', time: '9am'},
    {name:'UN Angular Summit', date: '6/10/2037', time: '8am', location: {address: 'The UN Angular Center', city: 'New York', country: 'USA'}},
  ]    

  constructor() { }

  ngOnInit(): void {
  }

}
