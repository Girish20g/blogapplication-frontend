import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {AppService} from '../app.service';
import {BlogpageService} from './blogpage.service';

@Component({
  selector: 'app-blogpage',
  templateUrl: './blogpage.component.html',
  styleUrls: ['./blogpage.component.scss']
})
export class BlogpageComponent implements OnInit {

  blogid;
  blogdetail = { };

  constructor(private blogservice: BlogpageService, private router: Router, private route: ActivatedRoute, private service: AppService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id'));
      this.blogid = id;
    }),
      this.blogservice.showblogDetails(this.blogid).subscribe((data) => {
        this.blogdetail = data;
      });
  }

}
