/**
 * Created by alica on 2017-02-10.
 */
import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AdService} from '../services/ad.service'

@Component({
  selector: 'products-root',
  templateUrl: './products.component.html',
  providers: [AdService],
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  ads: Ad[];

  constructor(private router: Router, private adService: AdService) { 
    this.adService.getAds().subscribe(ads => {
      console.log("getting ads");
      console.log(ads); 
      this.ads = ads;
    });

  }
  title = 'app works';
}

interface Ad {
  adId: number,
  userId: number,
  category: string, // 4 now
  title: string,
  description: string,
  duration: string
}