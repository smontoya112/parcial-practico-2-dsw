import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AirlineService } from '../airline.service';
import { Location } from '@angular/common';
import { Airline } from '../airline';

@Component({
  selector: 'app-airline-detail',
  templateUrl: './airline-detail.component.html',
})
export class AirlineDetailComponent implements OnInit {
  airline: Airline | undefined;
  loading = true;
  error = false;
constructor(
  private route: ActivatedRoute,
  private airlineService: AirlineService,
  private location: Location,
  private router: Router
) { }

  ngOnInit(): void {
    this.getAirlineDetails();
  }

  getAirlineDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.airlineService.getAirlineDetails(id).subscribe({
        next: (data) => {
          this.airline = data;
          this.loading = false;
        }
      });
    } else {
      this.error = true;
      this.loading = false;
    }
  }

  goBack(): void {
    this.location.back();
  }

  getFlights(id:string): void {
    if (this.airline && this.airline.id) {
      this.router.navigate([id+'/flights'], {
        queryParams: { airlineId: this.airline.id }
      });
    }
  }
}