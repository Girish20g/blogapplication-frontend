import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private http: HttpClient) { }

  getBlogsFromServer() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:9999/api/blogs';
    return this.http.get(url, {headers});
  }

  getWithCat(cat) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:9999/api/category/' + cat;
    return this.http.get(url, {headers});
  }

  getBySearch(str) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:9999/api/searchby/' + str;
    return this.http.get(url, {headers});
  }
}
