import { Component, OnInit } from '@angular/core';
import { from, of, Observable} from 'rxjs';
import { map, filter} from 'rxjs/operators'

@Component({
  selector: 'app-ex12obs2',
  templateUrl: './ex12obs2.component.html',
  styleUrls: ['./ex12obs2.component.css']
})
export class Ex12obs2Component implements OnInit {

  array1=[1,2,3,4,5];
  myobservable= from(this.array1);
  //using map
  transformobs=this.myobservable.pipe(map((val)=>{
    return val*5;
  }));

  //usingg filter
  filterobs=this.transformobs.pipe(filter((val)=>{
    return val>10;
  }))

  //combining map and filter

  transformobs1=this.myobservable.pipe(map((val)=>{
    return val*5;
  }),filter((val)=>{
    return val>10;
  }))
  

  //simplified the code with map and filterr 
  
  myobservable1= from(this.array1).pipe(map((val)=>{
    return val*5;
  }),filter((val)=>{
    return val>10;
  }))
 
  



  constructor() { }

  ngOnInit(): void {

    this.filterobs.subscribe((val)=>{
      console.log(val)
    },(error)=>alert(error.message),
    ()=>{
      alert('observables has completed emitting all values')
    })
    // --filter and map combining
    this.transformobs1.subscribe((val)=>{
      console.log(val)
    },(error)=>alert(error.message),
    ()=>{
      alert('observables has completed emitting all values')
    })

    // adding directly to main observables

    this.myobservable1.subscribe((val)=>{
      console.log(val)
    },(error)=>alert(error.message),
    ()=>{
      alert('observables has completed emitting all values')
    })


  }


}
