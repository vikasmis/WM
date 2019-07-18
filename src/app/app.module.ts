import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.forms';
import { newAppComponent } from './app.userdetails';
import { buyerDetails} from './buyer.component';
import {sellerDetails} from './seller.component'



@NgModule({
  declarations: [
    AppComponent,
    newAppComponent,
    buyerDetails,
    sellerDetails
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
