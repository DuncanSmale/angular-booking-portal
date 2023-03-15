import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerSearch } from '../models/customerSearch';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private client: HttpClient, private login: LoginService) { }

  getCustomer(search: CustomerSearch) {
  }
}
