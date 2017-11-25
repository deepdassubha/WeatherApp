import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/Rx';

import { WeatherService } from '../weather.service';
import { Deatils } from '../weather';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  weather:Deatils;
  constructor(private weatherSer:WeatherService, private route:ActivatedRoute) { }
  currentDetails:Deatils;
  location:any = {};

  onSubmit(weatherForm: NgForm){
    this.weatherSer.weatherReport(weatherForm.value.city).subscribe(
      (data) => {
        this.currentDetails = new Deatils(data.name, data.main.temp, data.weather[0].description, data.main.temp_min, data.main.temp_max, data.weather[0].icon);
      }
    )
  }
}
