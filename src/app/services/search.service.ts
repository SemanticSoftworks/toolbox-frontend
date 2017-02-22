/**
 * Created by Santos on 2017-02-14.
 */

import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {log} from "util";
import {Ad} from "../models/ad";
import {Observable} from "rxjs";

@Injectable()
export class SearchService {
  constructor(private http: Http) {
  }
  getLatestAds(): Observable<Ad[]> {
    console.log("Search request");
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get('http://130.229.152.194:8090/ad/getpage/0').map((response: Response) => response.json());
  }

  searchAds(query) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get('http://130.229.152.194:8090/ad/search/' +query).map((response: Response) => response.json());
  }
}
