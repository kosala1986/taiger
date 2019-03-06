import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpClient) { }

  get(path: string): Observable<any> {
    let header = this.createHeader();
    return this.http.get<any>(`${environment.gitHubURL}/${path}`, { headers: header })
      .pipe(
        retry(0),
        map((response) => {
          return response;
      }),
        catchError(this.handleError)
      );
  }

  createHeader(): HttpHeaders {
    let header = new HttpHeaders().set('Accept', 'application/vnd.github.v3+json');
    return header;
  }

  handleError(error) {
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
