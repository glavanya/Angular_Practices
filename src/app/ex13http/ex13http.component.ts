import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ex13http',
  templateUrl: './ex13http.component.html',
  styleUrls: ['./ex13http.component.css']
})
export class Ex13httpComponent implements OnInit {


  details:any;
  getdata:boolean=false;
  constructor(private http: HttpClient) {}

 getData(){
  this.getdata=true;
  this.http.get("https://fakestoreapi.com/products?limit=5").subscribe((data)=>{
    console.log(data)
    this.details=data;
  })
 }

  ngOnInit(): void {
  }

}
