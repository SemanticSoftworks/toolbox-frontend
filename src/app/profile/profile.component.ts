/**
 * Created by alica on 2017-02-10.
 */
import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'profile-root',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router) { }

  redirect() {
    this.router.navigate(['./profile']);
  }
  ngOnInit(): void {
  }
  title = 'app works';
}
