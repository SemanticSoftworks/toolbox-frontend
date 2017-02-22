import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "./services/user.service";
import {User} from "./models/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: User;
  username: string;
  online: boolean;

  constructor(public router: Router,private userService: UserService) {}

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(this.currentUser != null) {
      this.online = true;
    } else {
      this.online = false;
    }
  }

  logout() {
    console.log("loggdd out");
    this.userService.logout();
  }
}
