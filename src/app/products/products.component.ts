/**
 * Created by alica on 2017-02-10.
 */
import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'products-root',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {

  constructor(private router: Router) { }
  title = 'app works';
}
