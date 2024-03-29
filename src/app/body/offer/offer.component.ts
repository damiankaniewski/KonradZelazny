import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent {
  constructor(private router: Router) { }

  redirectToOffers(selectedOption: string) {
    this.router.navigate(['/offers', { option: selectedOption }]);
  }
}
