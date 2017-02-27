import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {AdminService} from "../services/admin.service";
import {User} from "../models/user";

@Component({
  selector: 'profile-root',
  templateUrl: 'admin.component.html',
  styleUrls: ['../main.component.css'],
})

export class AdminComponent implements OnInit{
  users: User[];
  selectedUser: User;
  sub: any;
  id: string;
  isUsers: boolean;
  pageNumber: number = 1;

  constructor(private adminService: AdminService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['string'];
    });

    if(this.id === 'users') {
      this.adminService.getUsers(this.pageNumber)
        .subscribe(users => {
        console.log("getting users");
        console.log(users);
        this.users = users;
      });
    } else if(this.id === 'ads') {

    } else {
      this.router.navigate(['/home']);
    }

    console.log(this.id);
  }

  setPageNumber(page: number) {
    this.pageNumber = page;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
