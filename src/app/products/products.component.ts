/**
 * Created by alica on 2017-02-10.
 */
import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AdService} from '../services/ad.service'

@Component({
  selector: 'products-root',
  //selector: 'app-root',
  templateUrl: './products.component.html',
  /*
  template: `
  <h1>{{title}}</h1>
    <ul class="ad">
      <li *ngFor="let ad of ads"
        [class.selected]="ad === selectedAd"
        (click)="onSelect(ad)">
        <span class="badge">{{ad.adId}}</span> {{ad.title}}
      </li>
    </ul>
    <div *ngIf="selectedAd">
      <h2>{{selectedAd.title}} details!</h2>
      <div><label>id: </label>{{selectedAd.adId}}</div>
      <!--
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedAd.title" placeholder="title"/>
      </div>
      -->
    </div>
  `,
  */
  providers: [AdService],
  styleUrls: ['./products.component2.css'],
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

/*

interface Ad {
  adId: number,
  userId: number,
  category: string, // 4 now
  title: string,
  description: string,
  duration: string
}
*/

export class Ad {
  adId: number;
  userId: number;
  category: string; // 4 now
  title: string;
  description: string;
  duration: string;
}