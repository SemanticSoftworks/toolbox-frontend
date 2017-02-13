import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public router: Router) {
  }

  navigate() { // Called by (click)= on element in .html
    this.router.navigate(['/login']);
  }
  title = 'app works';
}
