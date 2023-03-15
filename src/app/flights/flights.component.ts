import { Component, OnInit } from '@angular/core';
import { Flight } from '../models/flight';
import { FlightsService } from '../services/flights.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  dataSource: Flight[] = []
  displayedColumns: string[] = ['number', 'origin', 'destination', 'departureTime', 'arrivalTime', 'seatsAvailable', 'seatCost', 'actions'];

  constructor(private flightsService: FlightsService) {

  }

  ngOnInit(): void {
    this.flightsService.getAllFlights().subscribe(res => {
      this.dataSource = res
    })
  }


  bookFlight(flight: Flight) {
    console.log(flight)
  }

}
