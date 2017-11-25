import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { WeatherComponent } from './weather/weather.component';
import { ForecastComponent } from './forecast/forecast.component';

const routerConfig:Routes=[
  {path: '', component: WeatherComponent},
  {path: 'forecast', component: ForecastComponent}
]

export const weatherRouting:ModuleWithProviders=RouterModule.forRoot(routerConfig)
