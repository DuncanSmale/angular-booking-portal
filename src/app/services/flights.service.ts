import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flight } from '../models/flight';
import { FlightSearch } from '../models/flightSearch';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  url = "http://localhost:8202/flights"

  constructor(private client: HttpClient) { }

  getAllFlights() {
    return this.client.get<Flight[]>(this.url)
  }

  searchFlights(search: FlightSearch) {
    return this.client.post(`${this.url}/search`, search);
  }
}
