import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Konrad Żelazny';

  constructor(private router: Router) {
    this.router.navigate(['/main']);
  }

  ngAfterViewInit() {
    AOS.init();
  }
}
