import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

import {Photo} from '../products/products.component';

@Injectable()
export class PhotoService {
    constructor(private http: Http) {
        console.log("PhotoService initialized");
    }

    getPhotosOfAd(adPhoto: number) {
        return this.http.get('http://81.224.130.14:8090/photo/getadphotos/' + adPhoto)
            .map(res => res.json());
    }

    addPhoto(photo: Photo) {
        //var headers = new Headers();
        //headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post('http://81.224.130.14:8090/photo/addphoto',  photo, null)
            .map(res => res.json());
    }
}