/**
 * Created by alica on 2017-02-10.
 */
/*
import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'login-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  constructor(private router: Router) { }
  title = 'app works';
}
 */
 import { Component, OnInit } from '@angular/core';
 import { Router, ActivatedRoute } from '@angular/router';
 import { AlertService, AuthenticationService } from 'app/services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) { }

    ngOnInit() {
      // reset login status
      this.authenticationService.logout();
      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/profile';
    }

    login() {
      this.loading = true;
      this.authenticationService.login(this.model.username, this.model.password)
        .subscribe(
          data => {
            this.router.navigate([this.returnUrl]);
          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          });
  }
}

