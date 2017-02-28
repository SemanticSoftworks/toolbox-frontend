import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Ad} from "../models/ad";

@Injectable()
export class AdService {
    constructor(private http: Http) {
        console.log("ads service initialized");
    }

    getAds() {
        return this.http.get('http://smuts.noip.me:8090/ad/getads/0')
            .map(res => res.json());
    }

    getAd(ad: number) {
        return this.http.get('http://smuts.noip.me:8090/ad/' + ad)
            .map(res => res.json());
    }

    createAd(ad :Ad) {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post('http://smuts.noip.me:8090/ad/add', ad, options).map((response: Response) => response.json());
    }
}
