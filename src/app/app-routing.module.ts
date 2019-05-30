import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './utils/guards/auth.guard'

import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { FoodDrinksComponent } from './components/food-drinks/food-drinks.component';
import { HomeComponent } from './components/home/home.component';
import { HousekeepingComponent } from './components/housekeeping/housekeeping.component';
import { LaundryComponent } from './components/laundry/laundry.component';
import { LoginComponent } from './components/login/login.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { UserSideNavbarContentComponent } from './components/user-side-navbar-content/user-side-navbar-content.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        canActivate: [AuthGuard],
        component: HomeComponent,
        children: [
            {path: '', component: MainContentComponent},
            {path: 'food_driks/:id', component: FoodDrinksComponent},
            {path: 'entertainment/:id', component: EntertainmentComponent},
            {path: 'housekeeping/:id', component: HousekeepingComponent},
            {path: 'laundry', component: LaundryComponent},
            {path: 'reservations/:id', component: ReservationComponent},
            {path: 'shopping_cart', component: ShoppingCartComponent},
        ]
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
                                    EntertainmentComponent,
                                    FoodDrinksComponent,
                                    HomeComponent,
                                    HousekeepingComponent,
                                    LaundryComponent,
                                    LoginComponent,
                                    MainContentComponent,
                                    NavbarComponent,
                                    ProductCardComponent,
                                    ReservationComponent,
                                    ShoppingCartComponent,
                                    UserSideNavbarContentComponent,
                                 ];
