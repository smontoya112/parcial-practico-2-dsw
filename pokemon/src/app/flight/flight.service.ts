import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private baseUrl = environment.baseUrl+'.json';

constructor(private http:HttpClient) { }

  getFlights() {
    return this.http.get(`${this.baseUrl}`);
  }


}
