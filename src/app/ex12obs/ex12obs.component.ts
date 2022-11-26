import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-ex12obs',
  templateUrl: './ex12obs.component.html',
  styleUrls: ['./ex12obs.component.css']
})
export class Ex12obsComponent implements OnInit {

  myobservable1 = new Observable((observer)=>{
    
      console.log('observable starts')
     setTimeout(()=>{observer.next('1')},1000)
     setTimeout(()=>{observer.next('2')},2000)
     setTimeout(()=>{observer.next('3')},3000)
     //setTimeout(()=>{observer.error(new Error('Something went Wrong'))},3000)
     setTimeout(()=>{observer.next('4')},4000)
     setTimeout(()=>{observer.next('5')},5000)
     setTimeout(()=>{observer.complete()},5000)

      // observer.next('1');
      // observer.next('2');
      // observer.next('3');
      // observer.next('4');
      // observer.next('5');

  });

  myobservable = Observable.create((observer: { next: (arg0: string) => any; })=>{
    setTimeout(()=>{observer.next('a'),1000})
    setTimeout(()=>{observer.next('b'),2000})
    setTimeout(()=>{observer.next('c'),3000})
    setTimeout(()=>{observer.next('d'),4000})
  })

  constructor() { }

  ngOnInit():  void{

    this.myobservable.subscribe((val: any)=>{
      console.log(val)
    },(error: { message: any; })=>{
      alert(error.message)
    },()=>{
      alert('observables has completed emitting all values')
    })
  }
}
