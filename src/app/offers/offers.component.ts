import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { FirebaseService } from '../config/firebase-service/firebase-service.component';
import { getFirestore } from 'firebase/firestore';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  selectedOption: string = 'training';

  constructor(private route: ActivatedRoute, private firebaseService: FirebaseService) { 
    const db = getFirestore(firebaseService.app);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.selectedOption = params.get('option') ?? 'training';
      // zrobic dtos i wysylke danych
    });
  }
}