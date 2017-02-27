import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "./services/user.service";
import {User} from "./models/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentUser: User;
  username: string;
  online: boolean;
  isAdmin: boolean;

  constructor(public router: Router,private userService: UserService) {}

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(this.currentUser != null) {
      var roles = JSON.parse(localStorage.getItem('currentUser')).userRoles;
      for(let i = 0; i < roles.length; i++) {
        if(roles[i] === 'ROLE_ADMIN') {
          this.isAdmin = true;
        }
      }
      this.online = true;
    } else {
      this.online = false;
      this.isAdmin = false;
    }
  }

  logout() {
    console.log("loggdd out");
    this.userService.logout();
  }
}
