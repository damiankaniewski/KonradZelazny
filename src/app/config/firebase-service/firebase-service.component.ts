import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import firebaseConfig from '../firebaseConfig';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  app: any;

  constructor() {
    this.initializeApp();
  }

  private initializeApp() {
    this.app = initializeApp(firebaseConfig);
    getAnalytics(this.app);
  }
}
