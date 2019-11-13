import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor( private httpClient: HttpClient) { }

  authenticate(username, password) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get('http://localhost:9999/users/validate', {headers}).pipe(
      map( data => {
          sessionStorage.setItem('token', btoa(username + ':' + password));
        }
      ));

  }

  logOut() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('admin');
  }
}
