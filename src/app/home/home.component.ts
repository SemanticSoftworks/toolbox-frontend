import {Component, OnInit} from '@angular/core';
import { UserService } from '../services/index';
import {User} from "../models/user";

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  username: string;
  online: boolean;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(this.currentUser != null) {
      this.online = true;
    } else {
      this.online = false;
    }
  }

  logout() {
    this.userService.logout();
  }

  title = 'home works';
}
