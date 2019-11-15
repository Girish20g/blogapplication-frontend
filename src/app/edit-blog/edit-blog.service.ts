import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditBlogService {

  constructor(private http: HttpClient) { }
  showblogDetails(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:9999/api/blogs/' + id;
    return this.http.get(url, {headers});
  }
}
