import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {AppService} from '../app.service';
import {BlogpageService} from './blogpage.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-blogpage',
  templateUrl: './blogpage.component.html',
  styleUrls: ['./blogpage.component.scss']
})
export class BlogpageComponent implements OnInit {

  user;
  blogid;
  blogdetail;
  follow;
  cmt;
  url = 'http://localhost:9999/comment/post/';
  constructor(private blogservice: BlogpageService, private router: Router, private route: ActivatedRoute, private service: AppService, private http: HttpClient) { }

  ngOnInit() {
    if (!this.service.checkLogin()) {
      this.router.navigate(['/sign_in']);
    }
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id'));
      this.blogid = id;
    }),
      this.blogservice.showblogDetails(this.blogid).subscribe((data) => {
        this.blogdetail = data;
      });
    this.blogservice.currentUser().subscribe( data => {
      this.user = data;
      console.log(data);
    });
    this.blogservice.getFollowers().subscribe( data => {
      this.follow = data;
    });
  }

  following(id) {
    this.blogservice.addFollower(id).subscribe( data => {
      console.log(data);
      alert('You Started Following ' + this.blogdetail.user.username);

    });
  }

  addComment() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic' + token});
    return this.http.post(this.url + this.blogid , this.cmt, {headers}).subscribe((data) => {
      console.log(data);
      this.ngOnInit();
    });
  }

  getComment() {

  }

}
