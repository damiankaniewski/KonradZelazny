import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from 'src/config/firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'konrad-zelazny-strona';

  constructor() {
    const app = initializeApp(firebaseConfig);
    getAnalytics(app);
  }
}
