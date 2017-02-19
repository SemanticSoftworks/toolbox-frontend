 import { Component, OnInit } from '@angular/core';
 import { Router} from '@angular/router';
 import { AlertService, UserService } from '../services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) { }

    ngOnInit() {
      //this.userService.logout();
    }

    login() {
      this.loading = true;
      this.userService.login(this.model.username, this.model.password)
        .subscribe(
          data => {
            console.log("logged in");
            //localStorage.setItem('currentUser', JSON.stringify(data));
            //this.router.navigate(['/home']);
          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          });
  }
}

