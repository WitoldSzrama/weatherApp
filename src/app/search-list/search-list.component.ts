import { Component, OnInit } from '@angular/core';
import { AccessService } from '../shared/access.service';
import { WeatherService } from '../shared/weather.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {
  results:Location[];
  expand:boolean=false;
  constructor(private accessService:AccessService,
    private weatherService:WeatherService) { }

  ngOnInit() {
    this.weatherService.getLocals();
    this.accessService.isSearched
    .subscribe((search:any) => this.results=search)
  }

  onClick(component){
    this.weatherService.getResults(component);
    this.results=[];
  }

}
