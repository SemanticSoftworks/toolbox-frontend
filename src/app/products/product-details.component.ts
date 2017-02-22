import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AdService} from '../services/ad.service'
import { ActivatedRoute } from '@angular/router';

import { Ad } from './products.component';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  providers: [AdService],
  styleUrls: ['./products.component2.css'],
})

export class ProductDetailsComponent {
  detailedAd: Ad;
  id: number;
  private sub: any;

 constructor(private route: ActivatedRoute, private adService: AdService) {
 }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
    });

    this.adService.getAd(this.id).subscribe(ad => {
      console.log("getting detailed ad");
      this.detailedAd = ad;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
