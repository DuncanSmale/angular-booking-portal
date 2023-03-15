import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flight } from '../models/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  url = "http://localhost:8202/flights"

  constructor(private client: HttpClient) { }

  getAllFlights() {
    var headers_object = new HttpHeaders();
    headers_object.append('Content-Type', 'application/json');
    headers_object.append("Authorization", "Basic " + btoa("username:password"));

    const httpOptions = {
      headers: headers_object
    };
    return this.client.get<Flight[]>(this.url, httpOptions)
  }
}
