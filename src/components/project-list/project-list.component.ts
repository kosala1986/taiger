import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseService } from '../../services/base.service';
import { Repos } from '../../models/repos.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  gitHubForm: FormGroup;
  userName: string;
  projectList: Array<Repos> = [];

  constructor(private baseService: BaseService, private formBuilder: FormBuilder, private router: Router) { }

  //Create reactive form when component initiates and call GitHub to load user's repositories
  ngOnInit() {
    this.gitHubForm = this.formBuilder.group({
      userName: ['', Validators.required]
    });
  }

  //Call GitHub to load user's repositories
  getProjectList(userName: string): void {
    let user: string = `users/${userName}/repos`;
    this.baseService.get(user).subscribe((data) => {

      this.userName = userName;
      this.projectList = data;
    }, err => this.gitHubForm.reset());
  }

  onSubmit(): void {
    if (this.gitHubForm.valid) {
      this.projectList = [];
      this.getProjectList(this.gitHubForm.controls.userName.value);
    }
  }

  showList(): boolean {
    return this.projectList.length > 0;
  }

  viewFile(event: object, projectName: string): void {
    this.router.navigate(['/read-me'], { queryParams: { user: this.userName, repo: projectName } });
  }

}
