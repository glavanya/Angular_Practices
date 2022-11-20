import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex8',
  templateUrl: './ex8.component.html',
  styleUrls: ['./ex8.component.css']
})
export class Ex8Component implements OnInit {

  events=[
    {name:'Angular Connect',date: 9/26/2036,time: '10am',location:{address:'1 London Road',city:'London',country:'England' }},
    {name:'ng-conf 2037',date: 9/26/2036,time: '10am',url:'https://www.ng-cong.org/'},
    {name:'Future Conf (Location/Url TBD)',date: 9/26/2036,time: '10am'},
    {name:'ng-nl',date: 9/26/2036,time: '10am',url:'https://ng-nl.org'},
    {name:'UN Angular Summit',date: 9/26/2036,time: '10am',location:{address:'1 London Road',city:'London',country:'England' },
    url:'http://unangularsummit.org'}
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
