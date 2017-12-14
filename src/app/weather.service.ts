import { Injectable } from '@angular/core';
import { CurrentWeather } from './current-weather';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {
  current: CurrentWeather = new CurrentWeather('Kathmandu', '20', 'http://openweathermap.org/img/w/01d.png', 'scattered cloud', '35', '10');

  constructor(private http: HttpClient) {
  }

  weatherNow() {
    return this.current;
  }

  localWeather(lat: string, lon: string) {
    return this.http.get<WeatherInfo>('http://api.openweathermap.org/data/2.5/weather?lat='
      + lat + '&lon=' + lon + '&appid=07119143f1eb81a0312d42a0c7f0bd15&units=imperial').map(res => {
      const wea = res[ 'data' ];
      return wea;
    });
  }
}

interface WeatherInfo {
  name: string;
  main: string;
  temp: any;
  weather: string;
  icon: string;
  description: string;
  temp_max: string;
  temp_min: string;
}
