import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerSearch } from '../models/customerSearch';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url = "http://localhost:8201/customers"

  constructor(private httpClient: HttpClient, private login: LoginService) { }

  getCustomer(search: CustomerSearch) {
    var headers_object = new HttpHeaders();
    headers_object.append('Content-Type', 'application/json');
    headers_object.append("Authorization", "Basic " + btoa(`admin:is_a_lie`));

    const httpOptions = {
      headers: headers_object
    };
    return this.httpClient.post<Customer>(`${this.url}/search`, search, httpOptions);
  }
}
