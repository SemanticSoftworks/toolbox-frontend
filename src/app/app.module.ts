import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { Ng2PaginationModule } from 'ng2-pagination';

//Components
import { AppComponent } from './app.component';
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { ProductDetailsComponent } from "./products/product-details.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from './register/index';
import { SearchComponent } from "./search/search.component";
import { AuthGuard } from './guard/index';
import {AdminComponent} from "./admin/admin.component";
import {AddComponent} from "./add/add.component";

// services
import { UserService } from "./services/index";
import {SearchService} from "./services/search.service";
import {AdService} from './services/ad.service';
import {AdminService} from './services/admin.service';
import {AdminUserComponent} from "./admin/admin-user.component";

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: 'register', component: RegisterComponent},
  { path: 'search', component: SearchComponent},
  { path: 'products', component: ProductsComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'create', component: AddComponent},
  { path: 'admin/:string', component: AdminComponent, canActivate: [AuthGuard]},
  { path: 'admin-user/:id', component: AdminUserComponent, canActivate: [AuthGuard]},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SearchComponent,
    ProductsComponent,
    ProductDetailsComponent,
    ProfileComponent,
    RegisterComponent,
    AddComponent,
    AdminComponent,
    AdminUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    Ng2PaginationModule,
  ],
  providers: [
    UserService,
    SearchService,
    AdService,
    AdminService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
