/**
 * Created by Santos on 2017-02-14.
 */

import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SearchService} from "../services/search.service";
import {log} from "util";

@Component({
  selector: 'search-root',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {

  constructor(private router: Router, private searchService : SearchService) { }

  getAllAds() {
    log("Asdf");
    this.searchService.getLatestAds();

  }
  title = 'app wörks';
}
