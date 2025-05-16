import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirlineService {
  private baseUrl = 'https://raw.githubusercontent.com/NoNameLab/ISIS2603_Parcial2_S6_202510/main/flights';

  constructor(private http: HttpClient) { }

  getAllAirlines(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}.json`);
  }

  getAirlineDetails(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}.json`);
  }

  getFlights(airlineId: string): Observable<any[]> {
    return this.http.get<any>(`${this.baseUrl}/${airlineId}.json`)
      .pipe(map(airline => airline.flights || []));
  }
}