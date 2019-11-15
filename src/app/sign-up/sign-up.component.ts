import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AppService} from '../app.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private http: HttpClient,  private router: Router, private appservice: AppService) { }
  username;
  email;
  password;
  cpassword;
  address;
  phone;
  x;
  prod;
  url = 'http://localhost:9999/users/addUsers';

  ngOnInit() {
    this.appservice.getUsers().subscribe(data => {
      this.prod = data;
      console.log(data);
    });
  }

  signup() {
    this.x = 0;
    const ar = {
      username: this.username,
      password: this.password,
      email: this.email,
      address: this.address,
      phone: this.phone
    };
    for (let i = 0; i < this.prod.length; i++) {
      if (this.prod[i].username === ar.username) {
        alert('Username Already Exist');
        this.x = 1;
        break;
      }
      if (this.prod[i].email === ar.email) {
        alert('Email Already Exist');
        this.x = 1;
        break;
      }
      if (this.prod[i].phone === ar.phone) {
        alert('Email Already Exist');
        this.x = 1;
        break;
      }
    }
    if (this.x === 0 && this.password === this.cpassword) {
      this.http.post(this.url, ar).subscribe(data => {
        alert('New User Added');
        this.router.navigate(['/sign_in']);
      });
    }
    else {
      alert('password does not match');
    }
  }

}
