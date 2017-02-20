import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AdService {
    constructor(private http: Http) {
        console.log("ads service initialized");
    }

    // improvement: catch errors
    getAds() {
        // localdev
        // return this.http.get('http://localhost:8090/ad/getads/0').map(res => res.json());
        return this.http.get('http://81.224.130.14:8090/ad/getads/0')
            .map(res => res.json());
    }
}