import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private http: HttpClient,  private router: Router) { }
  username;
  email;
  password;
  address;
  phone;
  url = 'http://localhost:9999/users/addUsers';

  ngOnInit() {
  }

  signup() {
    const ar = {
      username: this.username,
      password: this.password,
      email: this.email,
      address: this.address,
      phone: this.phone
    };
    this.http.post(this.url, ar).subscribe(data => {
      alert('New User Added');
      this.router.navigate(['/sign_in']);
    });
  }

}
