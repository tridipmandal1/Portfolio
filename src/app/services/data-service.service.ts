import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../Environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private readonly REST_URL = environment.apiUrl;
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
