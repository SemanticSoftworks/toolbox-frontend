import {Component, OnInit} from '@angular/core';
import { UserService } from '../services/index';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  username: string;
  online: boolean;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    let a = JSON.parse(localStorage.getItem('currentUser'));
    if(a != null) {
      console.log(a);
      this.username = a.username;
      this.online = this.username != null && this.username.length > 0;
    } else {
      this.online = false;
    }
  }

  logout() {
    this.userService.logout();
  }

  title = 'home works';
}
