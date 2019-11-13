import { Component, OnInit } from '@angular/core';
import {BlogsService} from './blogs.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AppService} from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // tslint:disable-next-line:ban-types
  blogss: Object = [];
  c;

  constructor(private blogsService: BlogsService, private router: Router, private route: ActivatedRoute, private app: AppService) { }

  ngOnInit() {
    if (!this.app.checkLogin()) {
      this.router.navigate(['/sign_in']);
    }
    this.c = null;
    this.blogsService.getBlogsFromServer().subscribe((data) => {
      this.blogss = data;
    });
  }

  getWithCategory(cat) {
    this.c = cat;
    this.blogsService.getWithCat(cat).subscribe((data) => {
      this.blogss = data;
    });
  }

}
