import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactServiceComponent } from 'src/app/services/contact-service/contact-service.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactServiceComponent],
})
export class ContactComponent {
  constructor(private contactService: ContactServiceComponent) {}
  name?: string;
  email?: string;
  number?: number;
  message?: string;
  submitForm(form: any): void {
    if (form.valid) {
      const contactData = {
        imie: this.name,
        email: this.email,
        numer: this.number,
        wiadomosc: this.message,
      };
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      this.contactService.sendContact(contactData);
    } else {
    }
  }
}
