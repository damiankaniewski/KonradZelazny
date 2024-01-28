import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import firebaseConfig from '../firebaseConfig';
import { getFirestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  app: any;
  db: any;
  constructor() {
    this.initializeApp();
  }

  private initializeApp() {
    this.app = initializeApp(firebaseConfig);
    getAnalytics(this.app);
    this.db = getFirestore();
  }
}
