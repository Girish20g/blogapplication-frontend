import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import {AppService} from '../app.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  username;
  password;
  invalid = false;
  constructor(private router: Router, private loginservice: AuthenticationService, private appservice: AppService) {
  }

  ngOnInit() {
    if (this.appservice.checkLogin()) {
      this.router.navigate(['home']);
    }
  }

  checkLogin() {
    this.loginservice.authenticate(this.username, this.password).subscribe(
      data => {
        alert('Login Successful');
        this.appservice.isLoggedIn(true);
        this.invalid = false;
        this.router.navigate(['home']);
      }, error => {
        this.invalid = true;
      }
    );

  }

  logout() {
    this.appservice.isLoggedIn(false);
  }
}

