import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AdminService} from "../services/admin.service";

@Component({
  selector: 'profile-root',
  templateUrl: 'admin.component.html',
  styleUrls: ['../main.component.css'],
})

export class AdminComponent implements OnInit{

  constructor(private adminService: AdminService, private router: Router) {
  }

  ngOnInit() {

  }

}
