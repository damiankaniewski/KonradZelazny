import { Component } from '@angular/core';
import { collection, getDocs, setDoc, doc } from 'firebase/firestore';
import { FirebaseService } from 'src/app/config/firebase-service/firebase-service.component';

@Component({
  selector: 'app-offer-service',
  templateUrl: './offer-service.component.html',
  styleUrls: ['./offer-service.component.css'],
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

    const nameParts = offerData.imie.split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join('_');

    let collectionName = '';
    switch (offerType) {
      case 'training':
        collectionName = 'Trening personalny';
        break;
      case 'trainingPlan':
        collectionName = 'Plan treningowy';
        break;
      case 'onlineTraining':
        collectionName = 'Prowadzenie online';
        break;
      default:
        collectionName = 'Inne';
        break;
    }

    const documentName = `${firstName} ${lastName} ${formattedDate} ${formattedTime}`;

    await setDoc(doc(this.db, collectionName, documentName), offerData);
  }

  async getOffersFromDatabase(offerType: string) {
    const querySnapshot = await getDocs(collection(this.db, offerType));
    return querySnapshot.docs.map((doc) => doc.data());
  }
}
