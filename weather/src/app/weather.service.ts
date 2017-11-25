import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {
  private weather = [] ;
  location;
  constructor(private http:Http) { }

  weatherReport(city:string){
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?appid=b9feb11dd0284ae1a415f94d50777169&q=${city}&units=imperial&cnt=10`).map((response:Response) => response.json());
  }

  forecastReport(city:string){
    return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city},us&appid=b9feb11dd0284ae1a415f94d50777169&units=imperial`).map((response:Response) => response.json())
  }

}
