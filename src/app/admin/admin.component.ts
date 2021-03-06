import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {AdminService} from "../services/admin.service";
import {User} from "../models/user";
import {AdService} from "../services/ad.service";
import {Ad} from "../models/ad";
import {Role} from "../models/role";
import {Category} from "../models/category";

@Component({
  selector: 'profile-root',
  templateUrl: 'admin.component.html',
  styleUrls: ['../main.component.css'],
})

export class AdminComponent implements OnInit{
  users: User[];
  sub: any;
  id: string;
  isUsers: boolean;
  pageNumber: number = 1;
  model: any = {};
  addUser: boolean;
  roles: Role[];
  ads: Ad[];
  categories: Category[];
  addRole: boolean;
  updateRole: boolean;
  addCategory: boolean;
  updateCategory: boolean;

  constructor(private adminService: AdminService, private adService: AdService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['string'];
    });

    if(this.id === 'users') {
      this.adminService.getUsers(this.pageNumber)
        .subscribe(users => {
        this.users = users;
        localStorage.setItem('availableUsers', JSON.stringify(users));
      });
      this.adminService.getRoles()
        .subscribe(roles => {
          this.roles = roles;
          localStorage.setItem('availableRoles', JSON.stringify(roles));
        });
      this.isUsers = true;
    } else if(this.id === 'ads') {
      this.adService.getAds()
        .subscribe(ads => {
          console.log(ads);
          this.ads = ads;
        });
      this.adminService.getCategories()
        .subscribe(categories => {
          console.log(categories);
          this.categories = categories;
        });
      this.isUsers = false;
    } else {
      this.router.navigate(['/home']);
    }
  }

  setUserPageNumber(page: number) {
    this.adminService.getUsers(this.pageNumber)
      .subscribe(users => {
        this.users = users;
      });
    this.pageNumber = page;
  }

  setAdPageNumber(page: number) {
    this.pageNumber = page;
  }

  toggleAddUser() {
    this.addUser = !this.addUser;
    this.addRole = false;
    this.updateRole = false;
  }

  addNewUser() {
    if(this.model.enabled == null) {
      this.model.enabled = false;
    }
    if(this.model.userRoles == null) {
      this.model.userRoles = ['ROLE_AUCTIONEER'];
    }
    this.adminService.addUser(this.model)
      .subscribe(user => {
        this.toggleAddUser();
        window.location.href = '/admin/users';
      });
  }

  toggleAddRole() {
    this.addRole = !this.addRole;
    this.addUser = false;
    this.updateRole = false;
  }

  addNewRole() {
    this.adminService.addRole(this.model.role)
      .subscribe(role => {
        this.toggleAddRole();
        window.location.href = '/admin/users';
      });
  }

  toggleUpdateRole() {
    this.updateRole = !this.updateRole;
    this.addRole = false;
    this.addUser = false;
  }

  updateExistingRole() {
    if(this.model.selectedrole == null) {
      alert("Select a role to update");
    } else {
      for(var i = 0;i < this.roles.length;i++) {
        if(this.roles[i].role === this.model.selectedrole) {
          this.roles[i].role = this.model.updaterole;
          this.adminService.updateRole(this.roles[i])
            .subscribe(role => {
              this.toggleUpdateRole();
              window.location.href = '/admin/users';
          });
          break;
        }
      }
    }
  }

  toggleAddCategory() {
    this.addCategory = !this.addCategory;
    this.updateCategory = false;
  }

  addNewCategory() {
    this.adminService.addCategory(this.model.category)
      .subscribe(category => {
        this.toggleAddCategory();
        window.location.href = '/admin/ads';
      });
  }

  toggleUpdateCategory() {
    this.updateCategory = !this.updateCategory;
    this.addCategory = false;
  }

  updateExistingCategory() {
    if(this.model.selectedcategory == null) {
      alert("Select a category");
    } else {
      for(var i = 0;i < this.categories.length;i++) {
        if(this.categories[i].name === this.model.selectedcategory) {
          this.categories[i].name = this.model.updatecategory;
          this.adminService.updateCategory(this.categories[i])
            .subscribe(category => {
              this.toggleUpdateCategory();
              window.location.href = '/admin/ads';
            });
          break;
        }
      }
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
