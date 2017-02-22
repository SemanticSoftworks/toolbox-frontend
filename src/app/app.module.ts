import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

//Components
import { AppComponent } from './app.component';
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { ProductDetailsComponent } from "./products/product-details.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from './register/index';
import {SearchComponent} from "./search/search.component";

// services
import { UserService } from "./services/index";
import {SearchService} from "./services/search.service";
import {AdService} from './services/ad.service'


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},  
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'search', component: SearchComponent},
  { path: 'products', component: ProductsComponent },  
  { path: 'product-details/:id', component: ProductDetailsComponent},
  { path: 'register', component: RegisterComponent}
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
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService,
    SearchService,
    AdService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
