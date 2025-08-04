import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private readonly REST_URL = environment.url;
  constructor(
    private http: HttpClient
  ) { }

    getProfile() : Observable<any> {

      const headers = new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      });
      const OPTIONS = { headers: headers, observe: 'response' as 'body' };
      return this.http.get(`${this.REST_URL}/profile`, OPTIONS);
    }

    getEducation(): Observable<any> {

      const headers = new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      });
      const OPTIONS = { headers: headers, observe: 'response' as 'body' };
      return this.http.get(`${this.REST_URL}/education`, OPTIONS);
    }

    getContacts(): Observable<any> {
      const headers = new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      });
      const OPTIONS = { headers: headers, observe: 'response' as 'body' };
      return this.http.get(`${this.REST_URL}/contacts`, OPTIONS);
    }

    getProjects(): Observable<any> {

      const headers = new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      });
      const OPTIONS = { headers: headers, observe: 'response' as 'body' };
      return this.http.get(`${this.REST_URL}/projects`, OPTIONS);
    }

    getExperience(): Observable<any> {

      const headers = new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      });
      const OPTIONS = { headers: headers, observe: 'response' as 'body' };
      return this.http.get(`${this.REST_URL}/experience`, OPTIONS);
    }
}
