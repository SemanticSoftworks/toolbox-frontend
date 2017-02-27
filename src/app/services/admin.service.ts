import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { User } from '../models/user';
import 'rxjs/Rx';
import 'rxjs/add/operator/map'

@Injectable()
export class AdminService {
  constructor(private http: Http) { }

  updateUser(user: User) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://smuts.noip.me:8090/user/update', user, options).map((response: Response) => response.json());
  }
}
