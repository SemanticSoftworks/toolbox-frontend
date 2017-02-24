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

  updateProfile(event: Event) {
    event.preventDefault();
    this.model.username = this.currentUser.username;
    if(this.model.firstname == null) {
      this.model.firstname = this.currentUser.firstname;
    }
    if(this.model.lastname == null) {
      this.model.lastname = this.currentUser.lastname;
    }
    if(this.model.email == null) {
      this.model.email = this.currentUser.email;
    }
    if(this.model.password == null) {
      this.model.password = this.currentUser.password;
    }
    console.log(this.model.password);
    this.userService.updateUser(this.model).subscribe(
      data => {
        console.log(data);
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
