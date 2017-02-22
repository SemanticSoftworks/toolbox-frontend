import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AdService {
    constructor(private http: Http) {
        console.log("ads service initialized");
    }

    getAds() {
        return this.http.get('http://81.224.130.14:8090/ad/getads/0')
            .map(res => res.json());
    }

    getAd(ad: number) {
        return this.http.get('http://81.224.130.14:8090/ad/' + ad)
            .map(res => res.json());
    }
}