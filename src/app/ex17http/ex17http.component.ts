import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-ex17http',
  templateUrl: './ex17http.component.html',
  styleUrls: ['./ex17http.component.css']
})
export class Ex17httpComponent implements OnInit {

  MoviesLIst:any;
  constructor(private http:HttpClient) { }

  MakeRequest(){
 
    this.http.get("https://swapi.dev/api/films/").subscribe((data:any)=>{
    this.MoviesLIst=data.results
  })
}
  ngOnInit(): void {
  }

}
