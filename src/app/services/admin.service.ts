import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response, URLSearchParams} from '@angular/http';
import { User } from '../models/user';
import 'rxjs/Rx';
import 'rxjs/add/operator/map'

@Injectable()
export class AdminService {
  constructor(private http: Http) { }

  getUsers(nr: number) {
    var name = JSON.parse(localStorage.getItem('currentUser')).username;
    var pw = localStorage.getItem('password');
    let params = new URLSearchParams();
    params.set('startPosition', '' + ((nr * 10) - 10));
    params.set('endPosition', '' + (((nr + 1) * 10) - 10));
    let headers = new Headers();
    headers.append('Authorization', 'Basic ' + new Buffer(name + ':' + pw).toString('base64'));
    let options = new RequestOptions({ headers: headers });
    return this.http.get('http://81.224.130.14:8090/admin/user',{headers: headers, search: params}).map(res => res.json());
  }

  updateUser(user: User) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://smuts.noip.me:8090/user/update', user, options).map((response: Response) => response.json());
  }
}
