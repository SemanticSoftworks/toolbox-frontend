import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/index';


@Component({
  moduleId: module.id,
  templateUrl: 'register.component.html',
  styleUrls: ['../main.component.css']
})

export class RegisterComponent {
  model: any = {};

  constructor(
    private router: Router,
    private userService: UserService) { }

  register() {
    this.userService.register(this.model)
      .subscribe(
        data => {
          console.log("registered..");
          this.router.navigate(['/login']);
        },
        error => {
          alert(error);
        });
  }
}
