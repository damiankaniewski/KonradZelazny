import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { HomepageComponent } from './body/homepage/homepage.component';
import { AboutComponent } from './body/about/about.component';
import { OfferComponent } from './body/offer/offer.component';
import { ContactComponent } from './body/contact/contact.component';
import { OffersComponent } from './offers/offers.component';
import firebase from "firebase/compat/app";
import "firebase/firestore";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    HomepageComponent,
    AboutComponent,
    OfferComponent,
    ContactComponent,
    OffersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
