import {Component} from "@angular/core";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {Router} from "@angular/router";
import {Ad} from "../models/ad";
import {User} from "../models/user";

@Component({
  moduleId: module.id,
  templateUrl: './add.component.html',
  styleUrls: ['../main.component.css']
})

export class AddComponent {

  ad:Ad;
  currentUser: User;

  constructor(private router: Router, private http:Http) {
    //let ad2:Ad = {user: 1, title: "abc", description: "def", category: "test"};

  }

  add(username: number, title: string, description: string, category: string) {
    //Get logged in user and use its id in ad
    //this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log('in add...');
    console.log(title + ' ' );

    /*
    this.ad.user = 1;
    this.ad.title = title;
    this.ad.description = description;
    this.ad.category = category;
*/
    let ad2: Ad = ({adId: 3, user: 1, title: "abc", description: "def", category: "test", duration: null});

    console.log(ad2.user.valueOf());

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://130.229.173.224:8090/ad/add', ad2, options).map((response: Response) => response.json());
  }
}
