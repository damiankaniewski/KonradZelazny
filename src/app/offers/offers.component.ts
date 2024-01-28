import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../config/firebase-service/firebase-service.component';
import { getFirestore } from 'firebase/firestore';
import { OfferServiceComponent } from '../services/offer-service/offer-service.component';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
  providers: [OfferServiceComponent]
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