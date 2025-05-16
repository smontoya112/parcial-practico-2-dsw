import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AirlineComponent } from './airline.component';
import { AirlineDetailComponent } from './airline-detail/airline-detail.component';
import { AirlineListComponent } from './airline-list/airline-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [AirlineComponent,AirlineDetailComponent,AirlineListComponent]
})
export class AirlineModule { }
