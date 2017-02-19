/**
 * Created by alica on 2017-02-14.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { User } from '../models/user';
import 'rxjs/Rx';
import 'rxjs/add/operator/map'

@Injectable()
export class UserService {
  constructor(private http: Http) { }

  login(username: string, password: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://smuts.noip.me:8090/user/login', JSON.stringify({ username: username, password: password }),options)
      .map((response: Response) => response.json());
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  register(user: User) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://smuts.noip.me:8090/user/register', user, options).map((response: Response) => response.json());
  }
}
