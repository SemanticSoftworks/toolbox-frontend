import {Component} from "@angular/core";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {Router} from "@angular/router";
import {Ad} from "../models/ad";
import {User} from "../models/user";
import {AdService} from "../services/ad.service";

@Component({
  moduleId: module.id,
  templateUrl: './add.component.html',
  styleUrls: ['../main.component.css']
})

export class AddComponent {

  currentUser: User;

  constructor(private router: Router, private http:Http, private adService: AdService) {}

  add(username: number, category: number, title: string, description: string) {

    let ad: Ad = ({adId: -1, userId: this.currentUser.id, title: title, description: description, category: category, date: null, photosId: null});
    this.adService.createAd(ad).subscribe(ads => {
      console.log("getting ads");
      console.log(ads);
    });
  }
}
