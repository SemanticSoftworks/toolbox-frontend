/**
 * Created by Santos on 2017-02-14.
 */

import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {log} from "util";

@Injectable()
export class SearchService {
  constructor(private http: Http) {
  }
  getLatestAds() {
    console.log("Dsa");
    return this.http.get('130.229.158.178:8090/ad/getads/0', this.jwt()).map((response: Response) => response.json());
  }

  // private helper methods

  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }
}
