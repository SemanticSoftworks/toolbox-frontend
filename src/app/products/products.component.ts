/**
 * Created by alica on 2017-02-10.
 */
import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AdService} from '../services/ad.service'
import {PhotoService} from '../services/photo.service'

@Component({
  selector: 'products-root',
  templateUrl: './products.component.html',
  providers: [AdService],
  styleUrls: ['../main.component.css'],
})
export class ProductsComponent {
  ads: Ad[];
  photos: Photo[];
  selectedAd: Ad;

  constructor(private router: Router, private adService: AdService, private photoService: PhotoService) {
    this.adService.getAds().subscribe(ads => {
      this.ads = ads;
    });

    this.photoService.getPhotosOfAd(2).subscribe(p => {
        console.log("getting ads photos");
        this.photos = p;
    });

    let img: Photo = {id: 2, imgByte: null, adId: 2};
    this.photoService.addPhoto(img).subscribe(p => {
        console.log("saving ad photos");
    });
  }

  onSelect(ad: Ad): void {
    this.selectedAd = ad;
  }

  onePhoto() {
    //console.log(this.photos[0]);
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

// make contained in ad...
export class Photo {
  id: number;
  imgByte: WindowBase64;
  adId: number;
}
