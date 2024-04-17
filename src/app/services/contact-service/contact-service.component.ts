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
      blockHeadless: true,
      blockList: {
        list: ['foo@emailjs.com', 'bar@emailjs.com'],
        watchVariable: 'userEmail',
      },
      limitRate: {
        id: 'app',
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
