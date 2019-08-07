import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../shared/weather.service';
@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css']
})
export class WeatherAppComponent implements OnInit {
  myList:{time:number,temp:number,summary:string,name:string}[];
  constructor(private weatherService:WeatherService) { }
  ngOnInit() {
    this.myList=this.weatherService.weatherList;

    this.weatherService.weatherListChanged
    .subscribe((weatherList:{time:number,temp:number,summary:string,name:string}[]) =>this.myList=weatherList)

  }
    

  onDelete(loc){
    this.weatherService.removeFromList(loc)
  }

}
