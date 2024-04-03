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
      author: 'Patryk Podobiński',
      date: '3 lutego 2024',
      content:
        'W ciągu ostatniego roku Trener Konrad był kluczowy dla poprawy moich wyników w budowie sylwetki i zwiększeniu siły, ponad to dostosował treningi pod moje kontuzje (uraz kostki oraz kolana) wskazując ćwiczenia do wykonywania w domu. Jego podejście do treningu jest skuteczne i dostosowane do indywidualnych potrzeb podopiecznych. Polecam go wszystkim poszukującym wsparcia w osiągnięciu celów fitnessowych.',
      image: 'assets/profilePictures/patrykpodobinski.png',
    },
    {
      author: 'Autor Drugi',
      date: '15 marca 2024',
      content:
        'Dostosował treningi pod moje kontuzje (uraz kostki oraz kolana) wskazując ćwiczenia do wykonywania w domu. Jego podejście do treningu jest skuteczne i dostosowane do indywidualnych potrzeb podopiecznych. Polecam go wszystkim poszukującym wsparcia w osiągnięciu celów fitnessowych.',

      image: 'assets/profilePictures/patrykpodobinski.png',
    },
    {
      author: 'Autor Trzeci',
      date: '22 kwietnia 2024',
      content:
        'Konrad był kluczowy dla poprawy moich wyników w budowie sylwetki i zwiększeniu siły, ponad to dostosował treningi pod moje kontuzje (uraz kostki oraz kolana) wskazując ćwiczenia do wykonywania w domu. Jego podejście do treningu jest skuteczne i dostosowane do indywidualnych potrzeb podopiecznych. Polecam go wszystkim poszukującym wsparcia w osiągnięciu celów fitnessowych.',

      image: 'assets/profilePictures/patrykpodobinski.png',
    },
  ];

  slickConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
    vertical: false,
  };
}
