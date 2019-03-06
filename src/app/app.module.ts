import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from '../components/home/home.component';
import { ProjectListComponent } from '../components/project-list/project-list.component';
import { ReadMeComponent } from '../components/read-me/read-me.component';
import { BaseService } from '../services/base.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ReadMeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
