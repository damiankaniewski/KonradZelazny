import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent implements OnInit {
  @Input() type!: string;

  faqList!: { question: string; answer: string; expanded: boolean }[];

  constructor() {}

  ngOnInit() {
    this.faqList = this.getFaqList(this.type);
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['type'] && !changes['type'].firstChange) {
      this.updateFaqList();
    }
  }
  updateFaqList() {
    this.faqList = this.getFaqList(this.type);
  }

  getFaqList(
    type: string
  ): { question: string; answer: string; expanded: boolean }[] {
    switch (type) {
      case 'training':
        return [
          {
            question: 'Pytanie 1 o trening',
            answer: 'Odpowiedź na pytanie 1 o trening.',
            expanded: false,
          },
          {
            question: 'Pytanie 2 o trening',
            answer: 'Odpowiedź na pytanie 2 o trening.',
            expanded: false,
          },
        ];
      case 'trainingPlan':
        return [
          {
            question: 'Pytanie 1 o plan',
            answer: 'Odpowiedź na pytanie 1 o plan.',
            expanded: false,
          },
          {
            question: 'Pytanie 2 o plan',
            answer: 'Odpowiedź na pytanie 2 o plan.',
            expanded: false,
          },
        ];
      case 'onlineTraining':
        return [
          {
            question: 'Pytanie 1 o prowadzenie',
            answer: 'Odpowiedź na pytanie 1 o prowadzenie.',
            expanded: false,
          },
          {
            question: 'Pytanie 2 o prowadzenie',
            answer: 'Odpowiedź na pytanie 2 o prowadzenie.',
            expanded: false,
          },
        ];
      default:
        return [
          {
            question: 'Pytanie 1 główne',
            answer: 'Odpowiedź na pytanie 1 główne.',
            expanded: false,
          },
          {
            question: 'Pytanie 2 główne',
            answer: 'Odpowiedź na pytanie 2 główne.',
            expanded: false,
          },
        ];
    }
  }

  toggleAnswer(index: number) {
    this.faqList[index].expanded = !this.faqList[index].expanded;
  }
}
