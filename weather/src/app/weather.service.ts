import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { Weather } from './weather';

@Injectable()
export class WeatherService {
  private weather:Weather[] = [] ;
  weatherClass:Weather;
  location;
  constructor(private http:Http) { }

  // currentLocation(){
  //   return new Promise((res, rej)=>{
  //     navigator.geolocation.getCurrentPosition((pos) => {
  //       this.location = pos.coords;
  //       const lat = this.location.latitude;
  //       const lon = this.location.longitude;
  //       return this.http.get(`http://api.openweathermap.org/data/2.5/weather?appid=b9feb11dd0284ae1a415f94d50777169&lat=${lat}&lon=${lon}&units=imperial`).map((response:Response) => response.json()).toPromise().then(
  //         (data) => {
  //           this.weatherClass = new Weather(data.name, data.main.temp, data.weather[0].description, data.main.temp_min, data.main.temp_max, data.weather[0].icon);
  //           res(this.weatherClass);
  //           return this.weatherClass;
  //         }
  //       );
  //     })
  //   })
  // }

  weatherReport(city:string){
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?appid=b9feb11dd0284ae1a415f94d50777169&q=${city}&units=imperial&cnt=10`).map((response:Response) => response.json());
  }

  forecastReport(city:string){
    return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city},us&appid=b9feb11dd0284ae1a415f94d50777169&units=imperial`).map((response:Response) => response.json())
  }

}
