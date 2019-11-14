import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  isLoggedIn(bool: boolean) {
    sessionStorage.setItem('auth', String(bool));
    return bool;
  }
  checkLogin() {
    const auth = sessionStorage.getItem('auth');
    return JSON.parse(auth);
  }

  getUsers() {
    const token = sessionStorage.getItem('token');
    // const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:9999/users/getUsers';
    return this.httpClient.get(url);
  }
}
