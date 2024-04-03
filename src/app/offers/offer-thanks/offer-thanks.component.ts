import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OffersComponent } from '../offers.component';
import { PriceServiceComponent } from 'src/app/services/price-service/price-service.component';

@Component({
  selector: 'app-offer-thanks',
  templateUrl: './offer-thanks.component.html',
  styleUrls: ['./offer-thanks.component.css'],
})
export class OfferThanksComponent {
  price: number = 0;

  constructor(
    private router: Router,
    private priceService: PriceServiceComponent
  ) {
    this.getPrice();
  }
  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }
  goBack() {
    this.router.navigate(['/main']);
  }

  getPrice() {
    this.price = this.priceService.price;
  }
}
