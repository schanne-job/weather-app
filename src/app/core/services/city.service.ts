import { Injectable } from '@angular/core';

import { City } from '../interfaces/city';
import { Forecast } from '../interfaces/forecast';
import { CITIES } from '../../mocks/cities.mock';
import { FORECASTS } from '../../mocks/forecasts.mock';
import { NotFoundError } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class CityService {

 getCities(): Array<City> {
   return CITIES;
 }

 getForecast(cityId: number): Forecast {
   var find = FORECASTS.find(forecast => forecast.cityId === cityId);
   return (find as Forecast);
 }

}
