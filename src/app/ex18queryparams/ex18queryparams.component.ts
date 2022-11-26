import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-ex18queryparams',
  templateUrl: './ex18queryparams.component.html',
  styleUrls: ['./ex18queryparams.component.css']
})
export class Ex18queryparamsComponent implements OnInit {

  appId:any= "69bc9bb1bbaa496601358677ea57a017";
  city:any;
  forecast:any;
  
  constructor(private http: HttpClient) { }

  GetWeather(){
    this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.appId}`).
    pipe(map((response:any)=>{
      return response.weather[0].description;
    })).subscribe((data:any)=>{
      this.forecast=data;
    })
  }
  ngOnInit(): void {
  }

}
