import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact-service',
  templateUrl: './contact-service.component.html',
  styleUrls: ['./contact-service.component.css'],
})
export class ContactServiceComponent {
  constructor() {
    emailjs.init({
      publicKey: 'fsiP0hCqJR6lBngw5',
      // Do not allow headless browsers
      blockHeadless: true,
      blockList: {
        // Block the suspended emails
        list: ['foo@emailjs.com', 'bar@emailjs.com'],
        // The variable contains the email address
        watchVariable: 'userEmail',
      },
      limitRate: {
        // Set the limit rate for the application
        id: 'app',
        // Allow 1 request per 10s
        throttle: 10000,
      },
    });
  }
  public sendEmail(contactData: any): void {
    emailjs.send('konradZelazny', 'template_34qsque', contactData).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
      },
      (error) => {
        console.log('FAILED...', error);
      }
    );
  }

  public sendContact(contactData: any) {
    emailjs.send('konradZelazny', 'template_5c2dwu2', contactData).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
      },
      (error) => {
        console.log('FAILED...', error);
      }
    );
  }
}
