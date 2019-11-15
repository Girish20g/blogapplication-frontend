import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MyprofileService} from './myprofile.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {AppService} from '../app.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {
  user;
  disabled = true;
  blogs;
  folow;
  url = 'http://localhost:9999/users/update';
  // tslint:disable-next-line:max-line-length
  constructor(private myProfileService: MyprofileService, private router: Router, private route: ActivatedRoute, private http: HttpClient, private app: AppService) { }

  ngOnInit() {
    if (!this.app.checkLogin()) {
      this.router.navigate(['/sign_in']);
    }
    this.myProfileService.getUsers().subscribe(data => {
      this.user = data;
      console.log(data);
    });
    this.myProfileService.getUsersBlog().subscribe((data) => {
      this.blogs = data;
    });
    this.myProfileService.getFollowers().subscribe( data => {
      this.folow = data;
      console.log(data);
    });
  }

  toggle() {
    this.disabled = false;
  }

  save() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.http.put(this.url, this.user, {headers}).subscribe(data => {
      console.log(data);
      alert('Profile Updated Successfully');
      this.router.navigate(['/myprofile']);
      this.disabled = true;
    });
  }
  delete(id) {
    if (confirm('Click Ok To Delete!! else Click Cancel!!')) {
      this.myProfileService.deleteUserBlog(id).subscribe(data => {
        this.router.navigate(['/myprofile']);
        this.ngOnInit();
      });
    }
  }

  onSelect(blogs) {
    this.router.navigate(['/myprofile', blogs.id]);
  }

  deleteFollower(id) {
    if (confirm('Do You want to UNFOLLOW ???')) {
      this.myProfileService.deleteFollowers(id).subscribe( data => {
        console.log(data);
        this.myProfileService.getFollowers().subscribe( data => {
          this.folow = data;
          console.log(data);
        });
      });
    } else {}
  }


}
