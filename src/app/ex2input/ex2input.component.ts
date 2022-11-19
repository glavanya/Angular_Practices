import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-ex2input',
  templateUrl: './ex2input.component.html',
  styleUrls: ['./ex2input.component.css']
})
export class Ex2inputComponent implements OnInit {

  @Input() address: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
