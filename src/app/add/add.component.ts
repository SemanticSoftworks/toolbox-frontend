import {Component} from "@angular/core";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {Router} from "@angular/router";
import {Ad} from "../models/ad";

@Component({
  selector: 'add-root',
  templateUrl: './add.component.html',
  styleUrls: ['../main.component.css']
})

export class AddComponent {

  private ad:Ad;
  constructor(private router: Router, private http:Http) {}

  add(username: number, title: string, description: string, category: string) {
    this.ad.user = username;
    this.ad.title = title;
    this.ad.description = description;
    this.ad.category = category;

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://smuts.noip.me:8090/ad/add', this.ad, options).map((response: Response) => response.json());
  }
}
