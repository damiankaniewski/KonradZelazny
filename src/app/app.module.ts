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
import 'firebase/firestore';
import { OfferServiceComponent } from './services/offer-service/offer-service.component';
import { FormsModule } from '@angular/forms';
import { OfferThanksComponent } from './offers/offer-thanks/offer-thanks.component';
import { FooterComponent } from './footer/footer.component';
import { OpinionsComponent } from './body/opinions/opinions.component';
import { FaqComponent } from './body/faq/faq.component';
import { StatuteComponent } from './statute/statute.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    HomepageComponent,
    AboutComponent,
    OfferComponent,
    ContactComponent,
    OffersComponent,
    OfferServiceComponent,
    OfferThanksComponent,
    FooterComponent,
    FaqComponent,
    StatuteComponent,
    PrivacyPolicyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    OpinionsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
