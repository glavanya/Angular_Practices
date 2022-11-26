import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-ex17http1',
  templateUrl: './ex17http1.component.html',
  styleUrls: ['./ex17http1.component.css']
})
export class Ex17http1Component implements OnInit {

  MoviesLIst1:any;
  MovieUrl:string ="https://swapi.dev/api/films/"

  constructor(private http: HttpClient) { }

  makeRequest(){
    this.http.get("https://swapi.dev/api/films/").pipe(map((val:any)=>{
    console.log(val.results)
    return val.results})).subscribe((data:any)=>{
    this.MoviesLIst1=data;
    
  })
}

  ngOnInit(): void {
  }

}
