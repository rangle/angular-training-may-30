import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {

  BASE_URL = '//jsonplaceholder.typicode.com';

  constructor(private http: Http) { }

  get(url) {
    return this.http.get(`${this.BASE_URL}${url}`)
      .map(response => response.json());
  }

  put() {}
  post() {}
  delete() {}
}
