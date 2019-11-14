import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyprofileService {

  constructor(private http: HttpClient) { }
  getUsers() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:9999/users/logUser';
    return this.http.get(url, {headers});
  }

  getUsersBlog() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:9999/api/userBlogs';
    return this.http.get(url, {headers});
  }

  deleteUserBlog(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:9999/api/deleteBlog/' + id;
    return this.http.get(url, {headers});
  }
}
