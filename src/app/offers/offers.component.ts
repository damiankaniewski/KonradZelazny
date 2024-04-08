import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OfferServiceComponent } from '../services/offer-service/offer-service.component';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { NgForm } from '@angular/forms';
import { PriceServiceComponent } from '../services/price-service/price-service.component';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
  providers: [OfferServiceComponent],
  animations: [
    trigger('fadeAnimation', [
      state(
        'void',
        style({
          opacity: 0,
          transform: 'scale(0.1)', // początkowy rozmiar
        })
      ),
      transition(':enter', [animate('0.5s ease-in-out')]),
    ]),
  ],
})
export class OffersComponent implements OnInit {
  offerData: any;

  validForm: boolean = true;

  // Szczegóły zamówień
  healthCheck: boolean = false;
  isVoucher: boolean = false;
  isEarly: boolean = false;
  isLate: boolean = false;

  // Trening personalny
  trainingPrice: number = 150;
  trainingOptionSelect: string = 'trainingFour';
  // Plan treningowy
  planPrice: number = 150;
  trainingPlanOptionSelect: string = 'planOne';
  // Współpraca online
  onlinePrice: number = 150;
  onlineTrainingOptionSelect: string = 'onlineOne';
  // Voucher
  voucherName: string = '';
  voucherWhy: string = '';
  // Dane zamawiającego
  selectedOption: string = 'training';
  name: string = '';
  email: string = '';
  phone: string = '';
  additionalInfo: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private offerService: OfferServiceComponent,
    private priceService: PriceServiceComponent
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.selectedOption = params.get('option') ?? 'training';
    });
    this.updatePrice();
    this.updateBooleans();
    this.validForm = false;
  }

  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }

  validateForm(form: NgForm) {
    if (form.valid) {
      this.validForm = true;
    } else {
      this.validForm = false;
    }
  }

  submitOffer(form: NgForm) {
    this.updatePrice();
    if (form.valid) {
      this.validForm = true;

      let option: string;
      switch (this.selectedOption) {
        case 'training':
          option =
            this.trainingOptionSelect === 'trainingFour'
              ? '4 treningi w miesiacu'
              : this.trainingOptionSelect === 'trainingEight'
              ? '8 treningow w miesiacu'
              : this.trainingOptionSelect === 'trainingTwelve'
              ? '12 treningow w miesiacu'
              : 'N/A';
          break;
        case 'trainingPlan':
          option =
            this.trainingPlanOptionSelect === 'planOne'
              ? '1 blok - 6 tygodni'
              : this.trainingPlanOptionSelect === 'planTwo'
              ? '2 bloki - 12 tygodni'
              : this.trainingPlanOptionSelect === 'planThree'
              ? '3 bloki - 18 tygodni'
              : 'N/A';
          break;
        case 'onlineTraining':
          option =
            this.onlineTrainingOptionSelect === 'onlineOne'
              ? '1 blok - 6 tygodni'
              : this.onlineTrainingOptionSelect === 'onlineTwo'
              ? '2 bloki - 12 tygodni'
              : this.onlineTrainingOptionSelect === 'onlineThree'
              ? '3 bloki - 18 tygodni'
              : 'N/A';
          break;
        default:
          option = 'N/A';
          break;
      }

      switch (this.selectedOption) {
        case 'training':
          this.offerData = {
            imie: this.name,
            nazwisko: this.email,
            telefon: this.phone,
            dodatkowe_informacje: this.additionalInfo,
            cena: this.priceService.price,
            opcja: option,
            voucher: this.isVoucher ? 'Tak' : 'Nie',
            voucher_dla_kogo: this.voucherName,
            voucher_okazja: this.voucherWhy,
            czy_godziny_poranne: this.isEarly ? 'Tak' : 'Nie',
            czy_godziny_popoludniowe: this.isLate ? 'Tak' : 'Nie',
          };
          break;
        case 'trainingPlan':
          this.offerData = {
            imie: this.name,
            nazwisko: this.email,
            telefon: this.phone,
            dodatkowe_informacje: this.additionalInfo,
            cena: this.priceService.price,
            opcja: option,
            czy_zdrowy: this.healthCheck ? 'Tak' : 'Nie',
            czy_voucher: this.isVoucher ? 'Tak' : 'Nie',
          };
          break;
        case 'onlineTraining':
          this.offerData = {
            imie: this.name,
            nazwisko: this.email,
            telefon: this.phone,
            dodatkowe_informacje: this.additionalInfo,
            cena: this.priceService.price,
            opcja: option,
            czy_zdrowy: this.healthCheck ? 'Tak' : 'Nie',
            czy_voucher: this.isVoucher ? 'Tak' : 'Nie',
          };
          break;
        default:
      }

      this.offerService.addOfferToDatabase(this.offerData, this.selectedOption);

      //this.router.navigate(['/offer-thanks']);
    } else {
      this.validForm = false;
    }
  }

  updatePrice() {
    switch (this.selectedOption) {
      case 'training':
        switch (this.trainingOptionSelect) {
          case 'trainingFour':
            this.trainingPrice = 520;
            break;
          case 'trainingEight':
            this.trainingPrice = 960;
            break;
          case 'trainingTwelve':
            this.trainingPrice = 1320;
            break;
        }
        this.healthCheck = true;
        this.setPrice(this.trainingPrice);
        break;
      case 'trainingPlan':
        switch (this.trainingPlanOptionSelect) {
          case 'planOne':
            this.planPrice = 200;
            break;
          case 'planTwo':
            this.planPrice = 350;
            break;
          case 'planThree':
            this.planPrice = 500;
            break;
        }
        this.healthCheck = false;
        this.setPrice(this.planPrice);
        break;
      case 'onlineTraining':
        switch (this.onlineTrainingOptionSelect) {
          case 'onlineOne':
            this.onlinePrice = 300;
            break;
          case 'onlineTwo':
            this.onlinePrice = 550;
            break;
          case 'onlineThree':
            this.onlinePrice = 800;
            break;
        }
        this.healthCheck = false;
        this.setPrice(this.onlinePrice);
        break;
    }
  }

  setPrice(value: number) {
    this.priceService.price = value;
  }

  updateBooleans() {
    if (this.selectedOption === 'training') {
      this.isEarly = false;
      this.isLate = false;
    } else {
      this.isEarly = true;
      this.isLate = true;
    }
  }
}
