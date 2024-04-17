import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-opinions',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './opinions.component.html',
  styleUrls: ['./opinions.component.css'],
})
export class OpinionsComponent {
  constructor() {}

  ngOnInit(): void {}

  opinions = [
    {
      author: 'Patryk',
      date: '3 lutego 2024',
      content:
        'W ciągu ostatniego roku Trener Konrad był kluczowy dla poprawy moich wyników w budowie sylwetki i zwiększeniu siły, ponad to dostosował treningi pod moje kontuzje (uraz kostki oraz kolana) wskazując ćwiczenia do wykonywania w domu. Jego podejście do treningu jest skuteczne i dostosowane do indywidualnych potrzeb podopiecznych. Polecam go wszystkim poszukującym wsparcia w osiągnięciu celów fitnessowych.',
      image: 'assets/profilePictures/patryk.png',
    },
    {
      author: 'Beata',
      date: '6 listopada 2023',
      content:
        'Polecam z całego serducha zwłaszcza osobą które borykają się z różnego typu schorzeniami kręgosłupa i kontuzjami. Konrad podchodzi do każdego człowieka indywidualnie, ćwiczenia zawsze są przez niego dokładnie dobrane. Jest bardzo miłą, pozytywną i wyrozumiałą  osobą co też wielu z nas sobie ceni! Pełen profesjonalizm! Jeszcze raz szczerze POLECAM!',
      image: 'assets/profilePictures/beata.jpg',
    },
    {
      author: 'Szymon',
      date: '15 października 2023',
      content:
        'Współpraca z tym człowiekiem to sama przyjemność. Idealnie dobiera treningi pod umiejętności dzięki czemu można pokonywać swoje bariery z treningu na trening. Cieszę się, że nawiązałem z Konradem współpracę ❤️',
      image: 'assets/profilePictures/szymon.jpg',
    },
    {
      author: 'Rafał',
      date: '14 kwietnia 2023',
      content:
        'Polecam Konrada i współprace z nim na treningach indywidualnych. Współprace z nim cechuje indywidualne podejście i duża różnorodność ćwiczeń. u mnie to ćwiczenia siłowe, ćwiczenia kondycyjne pod bieganie i jeszcze ćwiczenia rehabilitujące nogę po wcześniejszym urazie, więc praca dość wymagająca z doborem odpowiednich ćwiczeń i obciążeń. Świetna demonstracja ćwiczeń i ewentualnych moich niedociągnięć w poszczególnych ruchach. Dodatkowo modyfikacje ćwiczeń pod moje pourazowe kolano. Konrad to prawdziwy profesjonalista w swoim fachu!',
      image: 'assets/profilePictures/rafal.jpg',
    },
    {
      author: 'Jacek',
      date: '12 kwietnia 2023',
      content:
        'Polecam treningi z Konradem w szczególności osobom po kontuzjach (urazach) jak ja. Idealnie dobrany zakres i obciążenia ćwiczeń jednym słowem pełen profesjonalizm. Zawsze pozytywnie nastawiony i uśmiechnięty, aż chce się z nim ciężko pracować. Szczerze polecam.',
      image: 'assets/profilePictures/jacek.jpg',
    },
  ];

  slickConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
    vertical: false,
  };
}
