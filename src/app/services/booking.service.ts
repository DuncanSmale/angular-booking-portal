import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  url = 'http://localhost:8203/bookings'

  constructor(private client: HttpClient) { }

  createBooking(flightId: number, customerId: number) {
    var headers_object = new HttpHeaders();
    headers_object.append('Content-Type', 'application/json');
    headers_object.append("Authorization", "Basic " + btoa("username:password"));

    const httpOptions = {
      headers: headers_object
    };
    const booking = { flightId, customerId }
    this.client.post<Booking>(this.url, booking, httpOptions)
  }
}
