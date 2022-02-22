import { Component, OnInit } from '@angular/core';
import { City } from '../core/interfaces/city';
import { CityService } from '../core/services/city.service';

@Component({
 selector: 'app-weather',
 templateUrl: './weather.component.html',
 styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

 cities: Array<City> = [];
 chosenCity: number = 0; 

 constructor(private cityService: CityService) { }

 ngOnInit() {
   this.cities = this.cityService.getCities();
 }

 onChooseCity(index: number): void {
  console.log(index);
  this.chosenCity = index;
 }
}
