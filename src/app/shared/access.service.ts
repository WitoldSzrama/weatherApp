import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessService {
  isSearched = new EventEmitter<{latitude:number,longitude:number}[]>();
  locations:{name:string,latitude:number,longitude:number}[]=[];
  myKey:string = ".json?access_token=pk.eyJ1Ijoid2l0b2xkLXN6cmFtYSIsImEiOiJjanl5andieHQwaHNwM2JtbWZ6bGg0NmNrIn0.rNRWiLkGZoaBHA4BUjyVjQ"
  address:string = "https://api.mapbox.com/geocoding/v5/mapbox.places/"
  observableAdress: Observable<any>;
  newData:any;
  fullAdress:string='';

  constructor(private http: HttpClient) { 
    
  }

  searchRes(val){
    this.locations=[]
    this.fullAdress = this.address + val + this.myKey;
    this.observableAdress =this.http.get(this.fullAdress);

    this.observableAdress.subscribe( data =>{
      this.newData = data;
      this.newData.features.forEach(e => {
        this.locations.push({
          name:e.place_name,
          latitude:e.center[1],
          longitude:e.center[0]
        })
      });
    },
    error => console.log("Error: ", error));

 
    this.isSearched.emit(this.locations)
  }
}