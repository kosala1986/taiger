import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseService } from '../../services/base.service';
import * as marked from 'marked';

@Component({
  selector: 'app-read-me',
  templateUrl: './read-me.component.html',
  styleUrls: ['./read-me.component.scss']
})
export class ReadMeComponent implements OnInit {

  userName: string;
  repoName: string;
  HTMLContent: string = '';

  constructor(private activeRoute: ActivatedRoute, private baseService: BaseService, private router: Router) { }

  ngOnInit() {

    this.activeRoute.queryParams.subscribe(queryParams => {
      this.userName = queryParams.user;
      this.repoName = queryParams.repo;

      if (this.userName && this.repoName) {
        this.getReadMeContent();
      } else {
        this.router.navigate(['/']);
      }
    });
  }
  
  getReadMeContent(): void {
    let user: string = `repos/${this.userName}/${this.repoName}/readme`;
    this.baseService.get(user).subscribe((data) => {
      this.HTMLContent = marked(atob(data.content));

    }, err => this.router.navigate(['/']));
  }

}
