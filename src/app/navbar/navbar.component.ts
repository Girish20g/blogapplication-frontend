import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private appservice: AppService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    if (this.appservice.checkLogin()) {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('admin');
      this.appservice.isLoggedIn(false);
      this.router.navigate(['sign_in']);
    }
  }

}
