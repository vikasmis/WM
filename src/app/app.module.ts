import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.forms';
import { newAppComponent } from './app.userdetails';
import { buyerDetails} from './buyer.component';
import {sellerDetails} from './seller.component'
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    newAppComponent,
    buyerDetails,
    sellerDetails
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
