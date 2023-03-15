import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private username: string | null = null
  private password: string | null = null

  Username() { return this.username; }
  Password() { return this.password; }

  Login(username: string, password: string) {
    this.username = username
    this.password = password
  }

  constructor() { }
}
