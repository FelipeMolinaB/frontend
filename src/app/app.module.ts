import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule }   from '@angular/forms';


import { ProductsService } from './utils/services/products.service'
import { AuthService } from './utils/services/auth.service'

import { AuthGuard } from './utils/guards/auth.guard'

import { StoreModule } from '@ngrx/store';
import { sbReducer } from './utils/reducers/sort-by.reducer';
import { scReducer } from './utils/reducers/shopping-cart.reducer';
import { giReducer } from './utils/reducers/guest-info.reducer';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      StoreModule.forRoot({shoppingCart: scReducer,sortBy:sbReducer, guestInfo:giReducer}),
      FormsModule
  ],
  providers: [
      ProductsService,
      AuthService,
      AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
