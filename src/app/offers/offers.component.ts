import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OfferServiceComponent } from '../services/offer-service/offer-service.component';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
  providers: [OfferServiceComponent],
  animations: [
    trigger('fadeAnimation', [
      state('void', style({
        opacity: 0,
        transform: 'scale(0.1)' // początkowy rozmiar
      })),
      transition(':enter', [
        animate('0.5s ease-in-out')
      ]),
    ]),
  ]
})
export class OffersComponent implements OnInit {
  selectedOption: string = 'training';
  name: string = '';
  email: string = '';
  phone: string = '';
  additionalInfo: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private offerService: OfferServiceComponent) { 

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.selectedOption = params.get('option') ?? 'training';
    });
  }

  addOffer() {
    const offerData = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      additionalInfo: this.additionalInfo,
      offerType: this.selectedOption
    };

    this.offerService.addOfferToDatabase(offerData, this.selectedOption);

    this.router.navigate(['/offer-thanks']);
  }
}