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
  model: any = {};
  edit: boolean;

  constructor(private userService: UserService,private router: Router) {
  }

  ngOnInit() {
    this.model = JSON.parse(localStorage.getItem('currentUser'));
  }

  updateProfile() {
    this.userService.updateUser(this.model).subscribe(
      data => {
        localStorage.setItem('currentUser', JSON.stringify(data));
        this.edit = false;
        window.location.href = '/profile';
      },
      error => {
        alert(error);
      });
  }

  toggleEdit() {
    this.edit = true;
    this.router.navigate(['/profile']);
  }

}
