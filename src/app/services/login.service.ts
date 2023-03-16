import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private username: string | null = null

  loggedInUser = new BehaviorSubject<string | null>(null)

  getLoggedInUser() {
    return this.loggedInUser.getValue()
  }

  isUserLoggedIn() {
    return this.username !== null
  }

  Login(username: string) {
    this.username = username
    this.loggedInUser.next(this.username)
  }

  Lougout() {
    this.username = null
    this.loggedInUser.next(this.username)
  }

  constructor() { }
}
