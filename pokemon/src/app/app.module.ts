import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FlightModule } from './flight/flight.module';
import { AirlineModule } from './airline/airline.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FlightModule, AirlineModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
