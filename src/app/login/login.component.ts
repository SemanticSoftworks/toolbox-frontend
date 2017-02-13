/**
 * Created by alica on 2017-02-10.
 */
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
