import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffersComponent } from './offers/offers.component';
import { BodyComponent } from './body/body.component';
import { OfferThanksComponent } from './offers/offer-thanks/offer-thanks.component';
import { StatuteComponent } from './statute/statute.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [
  { path: 'offers', component: OffersComponent },
  { path: 'main', component: BodyComponent },
  { path: 'offer-thanks', component: OfferThanksComponent },
  { path: 'statute', component: StatuteComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
