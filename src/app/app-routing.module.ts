import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from '../components/project-list/project-list.component';
import { ReadMeComponent } from '../components/read-me/read-me.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ProjectListComponent },
  { path: 'read-me', component: ReadMeComponent },
  { path: "**", redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
