/**
 * Created by alica on 2017-02-10.
 */
import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'profile-root',
  templateUrl: './profile.component.html',
  styleUrls: ['../main.component.css'],
})

export class ProfileComponent implements OnInit{
  currentUser: User;
  model: any = {};
  edit: boolean;

  constructor(private userService: UserService,private router: Router) {
    //Should not be in here if not logged in.
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {

  }

  updateProfile() {
    console.log("test update");
    this.edit = false;
    this.router.navigate(['/profile']);
  }

  toggleEdit() {
    this.edit = true;
    this.router.navigate(['/profile']);
  }

}
