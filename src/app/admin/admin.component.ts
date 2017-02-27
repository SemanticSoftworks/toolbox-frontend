/**
 * Created by alica on 2017-02-10.
 */
import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'profile-root',
  templateUrl: 'admin.component.html',
  styleUrls: ['../main.component.css'],
})

export class AdminComponent implements OnInit{

  constructor(private userService: UserService,private router: Router) {
    //Should not be in here if not logged in.
  }

  ngOnInit() {

  }

}
