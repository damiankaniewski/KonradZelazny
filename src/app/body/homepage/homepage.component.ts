import { Component } from '@angular/core';
import { HeaderComponent } from 'src/app/header/header.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [HeaderComponent],
})
export class HomepageComponent {
  constructor(private headerComponent: HeaderComponent) {}

  navigateToSection(sectionName: string) {
    this.headerComponent.navigateToSection(sectionName);
    this.headerComponent.toggleMenu();
  }
}
