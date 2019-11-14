import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {AppService} from '../app.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  heading;
  category;
  imgsrc;
  status;
  content;
  url = 'http://localhost:9999/api/addBlog';
  constructor(private http: HttpClient, private route: Router, private serve: AppService, private r: ActivatedRoute) { }

  ngOnInit() {
    if (!this.serve.checkLogin()) {
      this.route.navigate(['/sign_in']);
    }
  }

  addBlog() {
    if (this.heading != null && this.category != null && this.status != null && this.content != null && this.imgsrc != null) {
      const ar = {
        title: this.heading,
        category: this.category,
        status: this.status,
        content: this.content,
        imgsrc: this.imgsrc
      };
      const token = sessionStorage.getItem('token');
      const headers = new HttpHeaders({Authorization: 'Basic ' + token});
      this.http.post(this.url, ar, {headers}).subscribe((data) => {
        alert('Blog Added Successfully');
        this.route.navigate(['/home']);
      });
    } else {
      alert('Fill All Fields');
    }
  }

}
