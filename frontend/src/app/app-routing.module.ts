import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FoodPageComponent } from './pages/food-page/food-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  { path: 'food/:id', component: FoodPageComponent },
  { path: 'cart-page', component: CartPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
