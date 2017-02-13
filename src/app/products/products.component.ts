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
export class ProductsComponent implements OnInit {

  constructor(private router: Router) { }

  redirect() {
    this.router.navigate(['./products']);
  }
  ngOnInit(): void {
  }
  title = 'app works';
}
