import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WeatherService } from '../weather.service';
import { CurrentWeather } from '../current-weather';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: [ './current.component.css' ],
  encapsulation: ViewEncapsulation.None,
})
export class CurrentComponent implements OnInit {

  myWeather: CurrentWeather;
  location;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
    this.myWeather = this.weatherService.weatherNow();
    navigator.geolocation.getCurrentPosition((pos) => {
      this.location = pos.coords;
      const lat = this.location.latitude;
      const lon = this.location.longitude;
      this.weatherService.localWeather(lat, lon).subscribe(data => {
        console.log(data);
        this.myWeather = new CurrentWeather(data.name, data.main.temp,
          data.weather[ 0 ].icon, data.weather[ 0 ].description, data.main.temp_max, data.main.temp_min);
      });
      console.log(this.location);
    });
  }

}


