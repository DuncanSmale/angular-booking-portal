import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CustomerSearchType, UsernameSearch } from '../models/customerSearch';
import { CustomerService } from '../services/customer.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usernameControl = new FormControl('', [Validators.required])
  error: string | null = null

  constructor(private customerService: CustomerService, private loginService: LoginService, public dialogRef: MatDialogRef<LoginComponent>) { }

  login(username: string) {
    this.error = null
    const search: UsernameSearch = { searchType: CustomerSearchType.USER_SEARCH, username }
    this.customerService.getCustomer(search).subscribe(res => {
      if (res) {
        this.loginService.Login(res.username)
        this.dialogRef.close()
      } else {
        this.error = "Incorrect Username"
      }
    })
  }

  close() {
    this.dialogRef.close()
  }
}
