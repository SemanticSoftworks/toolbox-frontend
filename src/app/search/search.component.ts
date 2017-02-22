/**
 * Created by Santos on 2017-02-14.
 */

import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SearchService} from "../services/search.service";
import {log} from "util";
import {Headers, RequestOptions, Response, Http} from "@angular/http";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Ad} from "../models/ad";

@Component({
  selector: 'search-root',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})
export class SearchComponent {

  list: Ad[];
  textString : string;

  constructor(private router: Router, private http:Http, private searchService : SearchService) {

    this.searchService.getLatestAds().subscribe(x => {
      this.list = x;

      //console.log('list' +x);
      }
      );
  }

  search(query) {
    this.searchService.searchAds(query).subscribe(x => {
        this.list = x;

        //console.log('list' +x);
      }
    );
  }

  title = 'app wörks';
}
