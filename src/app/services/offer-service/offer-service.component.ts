import { Component } from '@angular/core';
import { collection, addDoc, getDoc, getDocs, setDoc, doc } from 'firebase/firestore';
import { OfferDtoComponent } from 'src/app/dtos/offer-dto/offer-dto.component';
import { FirebaseService } from 'src/app/config/firebase-service/firebase-service.component';
@Component({
  selector: 'app-offer-service',
  templateUrl: './offer-service.component.html',
  styleUrls: ['./offer-service.component.css']
})
export class OfferServiceComponent {
  db: any;
  constructor(private firebaseService: FirebaseService) { 
    this.db = this.firebaseService.db;
    console.log(this.getOffersFromDatabase('voucher'));
  }
  async addOfferToDatabase(offerData: any, offerType: string) {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString(); 

    const documentName = `${offerData.name.replace(/\s/g, '')}${formattedDate}`;

    await setDoc(doc(this.db, offerType, documentName), offerData);
  }

  async getOffersFromDatabase(offerType: string) {
    const querySnapshot = await getDocs(collection(this.db, offerType));
    return querySnapshot.docs.map(doc => doc.data());
  }
}
