import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CurrentComponent } from './current/current.component';
import { ForecastComponent } from './forecast/forecast.component';
import { weatherRouting } from './weather.routing';
import { WeatherService } from './weather.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrentComponent,
    ForecastComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    weatherRouting,
  ],
  providers: [ WeatherService ],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
