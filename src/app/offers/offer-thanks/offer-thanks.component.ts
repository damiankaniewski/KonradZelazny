import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from 'src/app/header/header.component';

@Component({
  selector: 'app-offer-thanks',
  templateUrl: './offer-thanks.component.html',
  styleUrls: ['./offer-thanks.component.css'],
})
export class OfferThanksComponent {
constructor(private router: Router) {
  setTimeout(() => {
    this.router.navigate(['/main']);
  }, 10000)
}

  goBack() {
    this.router.navigate(['/main']);
  }
}
