import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  username: string | null = null

  constructor(private loginService: LoginService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loginService.loggedInUser.subscribe(res => {
      this.username = res
    })
  }

  login() {
    let dialogRef = this.dialog.open(LoginComponent, {
      height: '400px',
      width: '600px',
    });
  }

  logout() {
    this.loginService.Lougout()
  }


}
