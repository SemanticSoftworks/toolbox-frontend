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
  styleUrls: ['../main.component.css'],
})
export class ProductsComponent {
  ads: Ad[];
  selectedAd: Ad;

  constructor(private router: Router, private adService: AdService) {
    this.adService.getAds().subscribe(ads => {
      console.log("getting ads");
      console.log(ads);
      this.ads = ads;
    });
  }

  onSelect(ad: Ad): void {
    this.selectedAd = ad;
  }

  title = 'Products';
}

export class Ad {
  adId: number;
  userId: number;
  category: string;
  title: string;
  description: string;
  duration: string;
}
