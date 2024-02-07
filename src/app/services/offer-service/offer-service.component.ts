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
  }
  async addOfferToDatabase(offerData: any, offerType: string) {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];
    const formattedTime = currentDate.toTimeString().split(' ')[0];

    const nameParts = offerData.name.split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join('_');

    const documentName = `${firstName}_${lastName}_${formattedDate}_${formattedTime}_${offerType}`;

    await setDoc(doc(this.db, offerType, documentName), offerData);
  }

  async getOffersFromDatabase(offerType: string) {
    const querySnapshot = await getDocs(collection(this.db, offerType));
    return querySnapshot.docs.map(doc => doc.data());
  }
}
