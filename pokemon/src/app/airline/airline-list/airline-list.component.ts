import { Component, OnInit } from '@angular/core';
import { AirlineService } from '../airline.service';
import { Airline } from '../airline';

@Component({
  selector: 'app-airline-list',
  templateUrl: './airline-list.component.html'
})
export class AirlineListComponent implements OnInit {
  airlines: Airline[] = [];
  loading = true;
  error = false;

  constructor(private airlineService: AirlineService) { }

  ngOnInit(): void {
    this.getAirlines();
  }

  getAirlines(): void {
    this.airlineService.getAllAirlines().subscribe({
      next: (data) => {
        this.airlines = data;
        this.loading = false;
      }
    });
  }
}