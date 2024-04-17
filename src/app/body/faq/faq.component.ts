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
      case 'trening':
        return [
          {
            question:
              'Czy siłownia w której trenujesz akceptuje karty multisport, medicover itp?',
            answer:
              'Tak, w siłowni akceptowane są karty: multisport, medicover, fitprofit, pzu sport, fitsport.',
            expanded: false,
          },
          {
            question: 'Czy mogę przełożyć lub odwołać umówiony trening?',
            answer:
              'Jeśli poinformujesz mnie do 24 godzin wcześniej, tak. Jeżeli nie, trening traktuje jako zrealizowany.',
            expanded: false,
          },
          {
            question: 'W jakich godzinach mogę umówić się na trening?',
            answer:
              'Treningi prowadzę od poniedziałku do piątku, w godzinach 6 – 22, więc w tych godzinach możemy się umówić.',
            expanded: false,
          },
          {
            question: 'Czy układasz i rozpisujesz dietę?',
            answer:
              'Nie rozpisuje i nie układam diet. Na treningu osobą zdrowym (bez chorób dietetycznych) oferuje pełne wsparcie z zakresu zdrowych nawyków żywieniowych zupełnie za darmo.',
            expanded: false,
          },
          {
            question:
              'Mam problemy zdrowotne, czy mogę ćwiczyć i umówić się na trening?',
            answer:
              'Każdy przypadek wymaga indywidualnej oceny. Przed każdym treningiem przeprowadzam wywiad zdrowotny i diagnostykę funkcjonalną. Na podstawie zebranych informacji dobieram plan treningowy i ćwiczenia korekcyjne. ',
            expanded: false,
          },
        ];
      case 'plan_treningowy':
        return [
          {
            question: 'Od kiedy możemy zacząć współpracę?',
            answer:
              'Od zaksięgowania pieniędzy na koncie wysyłam linka do ankiety medycznej. Od  momentu jej wypełnienia do 3 dni roboczych.',
            expanded: false,
          },
          {
            question: 'Czy rozpisujesz ciężar w planie treningowym?',
            answer: 'Ciężar rozpisuje w prowadzeniu online.',
            expanded: false,
          },
          {
            question:
              'Czy możemy zacząć współpracę jak mam problemy zdrowotne?',
            answer:
              'Każdy przypadek wymaga indywidualnej oceny. Najpierw proszę o kontakt w celu szczegółowej oceny.',
            expanded: false,
          },
          {
            question: 'Czy układasz i rozpisujesz dietę?',
            answer:
              'Nie rozpisuje i nie układam diet. Na treningu osobą zdrowym (bez chorób dietetycznych) oferuje pełne wsparcie z zakresu zdrowych nawyków żywieniowych zupełnie za darmo.',
            expanded: false,
          },
          {
            question: 'Czy muszę chodzić na siłownie?',
            answer:
              'Nie musisz chodzić na siłownie by ćwiczyć. Dobieram ćwiczenia do sprzętu, którym dysponujesz.',
            expanded: false,
          },
        ];
      case 'prowadzenie_online':
        return [
          {
            question: 'Od kiedy możemy zacząć współpracę?',
            answer:
              'Od zaksięgowania pieniędzy na koncie wysyłam linka do ankiety medycznej. Od  momentu jej wypełnienia do 3 dni roboczych.',
            expanded: false,
          },
          {
            question: 'W jaki sposób poprawisz moją technikę ćwiczeń?',
            answer: 'Na podstawie filmów ćwiczeń, które mi wyślesz.',
            expanded: false,
          },
          {
            question:
              'Czy możemy zacząć współpracę jak mam problemy zdrowotne?',
            answer:
              'Każdy przypadek wymaga indywidualnej oceny. Najpierw proszę o kontakt w celu szczegółowej oceny.',
            expanded: false,
          },
          {
            question: 'Czy układasz i rozpisujesz dietę?',
            answer:
              'Nie rozpisuje i nie układam diet. Na treningu osobom zdrowym (bez chorób dietetycznych) oferuje pełne wsparcie z zakresu zdrowych nawyków żywieniowych zupełnie za darmo.',
            expanded: false,
          },
          {
            question: 'Czy muszę chodzić na siłownie?',
            answer:
              'Nie musisz chodzić na siłownie by ćwiczyć. Dobieram ćwiczenia do sprzętu, którym dysponujesz.',
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
          {
            question: 'Pytanie 2 główne',
            answer: 'Odpowiedź na pytanie 2 główne.',
            expanded: false,
          },
          {
            question: 'Pytanie 2 główne',
            answer: 'Odpowiedź na pytanie 2 główne.',
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
