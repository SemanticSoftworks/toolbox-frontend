import {Component, OnInit} from '@angular/core';
import { UserService } from '../services/index';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['../main.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private userService: UserService) {

  }

  ngOnInit(): void {

  }
}
