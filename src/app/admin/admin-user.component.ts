import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {AdminService} from "../services/admin.service";
import {User} from "../models/user";

@Component({
  selector: 'profile-root',
  templateUrl: 'admin-user.component.html',
  styleUrls: ['../main.component.css'],
})

export class AdminUserComponent implements OnInit{
  sub: any;
  id: string;
  edit: boolean;
  model: any = {};
  roles: any = {};

  constructor(private adminService: AdminService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      var users = JSON.parse(localStorage.getItem('availableUsers'));
      for(var i = 0;i < users.length; i++) {
        if(users[i].username === this.id) {
          this.model = users[i];
          this.model.password = '';
          break;
        }
      }
    });
    this.edit = false;
    this.roles = JSON.parse(localStorage.getItem('availableRoles'));
  }

  toggleEdit() {
    this.edit = true;
  }

  updateProfile() {
    this.adminService.updateUser(this.model).subscribe(
      data => {
        this.edit = false;
        console.log(data);
        this.router.navigate(['/admin/users']);
      },
      error => {
        alert(error);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
