import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffersComponent } from './offers/offers.component';
import { BodyComponent } from './body/body.component';
import { OfferThanksComponent } from './offers/offer-thanks/offer-thanks.component';

const routes: Routes = [
  { path: 'offers', component: OffersComponent},
  { path: 'main', component: BodyComponent },
  { path: 'offer-thanks', component: OfferThanksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
