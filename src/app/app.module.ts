import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import {TooltipModule} from 'ng2-tooltip-directive';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WeatherAppComponent } from './weather-app/weather-app.component';
import { SearchListComponent } from './search-list/search-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherAppComponent,
    SearchListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TooltipModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
