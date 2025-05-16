import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AirlineService } from '../../airline/airline.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html'
})
export class FlightListComponent implements OnInit {
  flights: any[] = [];
  airline: any;
  loading = true;
  error = false;

  constructor(
    private airlineService: AirlineService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    const airlineId = this.route.snapshot.queryParamMap.get('airlineId');
    if (airlineId) {
      this.getFlights(airlineId);
      this.getAirlineDetails(airlineId);
    } else {
      this.error = true;
      this.loading = false;
    }
  }

  getFlights(airlineId: string): void {
    this.airlineService.getFlights(airlineId).subscribe({
      next: (data) => {
        this.flights = data;
        this.loading = false;
      }
    });
  }

  getAirlineDetails(airlineId: string): void {
    this.airlineService.getAirlineDetails(airlineId).subscribe({
      next: (data) => {
        this.airline = data;
      }
    });
  }

  goBack(): void {
    this.location.back();
  }
}