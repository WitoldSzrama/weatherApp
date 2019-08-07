import { Injectable,EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  adress:string='https://witoldszrama-eval-test.apigee.net/weatherapp/'
  observableAdress: Observable<any>;
  weatherListChanged= new EventEmitter<{time:number,temp:number,summary:string,name:string}[]>()
  weatherList: {time:number,temp:number,summary:string,name:string}[]=[];
  localLocations:{name:string,latitude:number,longitude:number}[]=[]
  localLoaded:boolean=false
  isLoaded$= new EventEmitter<Boolean>();
  constructor(private http: HttpClient) { }

  getLocals(){
    if(localStorage.getItem('myWeatherApp')){
      this.localLocations=JSON.parse(localStorage.getItem('myWeatherApp'))
       this.localLocations.forEach(e =>{
          this.getResults(e)
       })
          
        }  
      this.localLoaded=true
    
  }

  getResults(location:{name:string,latitude:number,longitude:number}){

    if(this.localLoaded){
      this.localLocations.push(location)
    }
    let fullAdress:string = this.adress+location.latitude + ','+location.longitude+'?lang=pl'
    this.observableAdress = this.http.get(fullAdress)
    this.observableAdress.subscribe(data =>{
      this.weatherList.push(
        {
         time: data.currently.time,
         temp: (data.currently.temperature-32)*5/9,
         summary: data.currently.summary,
         name: location.name,
         
        }
      ) 
      
    });
    
    localStorage.setItem('myWeatherApp',JSON.stringify(this.localLocations))
    this.weatherListChanged.emit(this.weatherList);
    

  }

  removeFromList(element:{time:number,temp:number,summary:string,name:string}){
    this.localLocations = this.localLocations.filter(e => e.name!=element.name)
    this.weatherList = this.weatherList.filter(e => e!=element)
    this.weatherListChanged.emit(this.weatherList)
    localStorage.setItem('myWeatherApp',JSON.stringify(this.localLocations))
  }
}
