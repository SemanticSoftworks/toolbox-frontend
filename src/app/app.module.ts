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
import { ProfileComponent } from "./profile/profile.component";
import { UserService } from "./services/index";
import { RegisterComponent } from './register/index';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'products', component: ProductsComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProductsComponent,
    ProfileComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
