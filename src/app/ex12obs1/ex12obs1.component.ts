import { Component, OnInit } from '@angular/core';
import {  from, Observable, of} from 'rxjs';
import { map, filter} from 'rxjs/operators'

@Component({
  selector: 'app-ex12obs1',
  templateUrl: './ex12obs1.component.html',
  styleUrls: ['./ex12obs1.component.css']
})
export class Ex12obs1Component implements OnInit {

  array1=[1,2,3,4];
  array2=['A','B','C','D'];
myobservable = of(this.array1,this.array2,40,'Hello')
myobservable1 = from(this.array1)
myobservable2 = from(this.array2)

transformobserrvable= this.myobservable1.pipe(map((val)=>{
  return val*5
}))

  constructor() { }

  ngOnInit(): void {
    this.myobservable.subscribe((val)=>{
      console.log(val)
    },(error)=>alert(error.message)
  ,()=>{
    alert('observables has completed emitting all values')
  })
  this.myobservable1.subscribe((val)=>{
    console.log(val)
  },(error)=>alert(error.message)
,()=>{
  alert('observables has completed emitting all values')
})
this.myobservable2.subscribe((val)=>{
  console.log(val)
},(error)=>alert(error.message)
,()=>{
alert('observables has completed emitting all values')
})
this.transformobserrvable.subscribe((val)=>{
  console.log(val)
},(error)=>alert(error.message)
,()=>{
alert('observables has completed emitting all values')
})

}}
