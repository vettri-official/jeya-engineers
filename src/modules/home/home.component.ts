import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import swictchColor from 'src/utilities/functions/navbar-color';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  ngOnInit(): void {
    swictchColor('#leading-marine');
    this.hideScroll('solution-frame');
    this.hideScroll('blogs-frame');
  }
  serviceArr: any[] = [
    {
      title: 'Power steering',
      subject:
        'High-performance servicing and repairs for seamless marine operations.',
    },
    {
      title: 'Winch',
      subject:
        'Expert maintenance and repair to ensure reliability and safety.',
    },
    {
      title: 'Escorts Cranes',
      subject:
        'Professional servicing for optimal lifting and handling performance.',
    },
    {
      title: 'Kalmar and Reach Stackers',
      subject:
        'Professional servicing for optimal lifting and handling performance.',
    },
    {
      title: 'PPM and Top Lift Solutions',
      subject:
        'Professional servicing for optimal lifting and handling performance.',
    },
    {
      title: 'FEL (Front-End Loader)',
      subject:
        'Professional servicing for optimal lifting and handling performance.',
    },
    {
      title: 'Grab Equipment Maintenance',
      subject:
        'Professional servicing for optimal lifting and handling performance.',
    },
    {
      title: 'Marine Gearbox Services',
      subject:
        'Professional servicing for optimal lifting and handling performance.',
    },
    {
      title: 'Hydraulic Systems Support',
      subject:
        'Professional servicing for optimal lifting and handling performance.',
    },
    {
      title: 'Mechanical Repair and Maintenance',
      subject:
        'Professional servicing for optimal lifting and handling performance.',
    },
  ];

  scrollRight(element: string) {
    const container = document.getElementById(element) as HTMLDivElement;
    const screen = window.innerWidth;
    container.scrollBy({
      top: 0,
      left: screen * 0.8, // Scroll left by 200 pixels
      behavior: 'smooth', // Smooth scrolling
    });
  }
  scrollLeft(element: string) {
    const container = document.getElementById(element) as HTMLDivElement;
    const screen = window.innerWidth;
    container.scrollBy({
      top: 0,
      left: screen * -0.8, // Scroll left by 200 pixels
      behavior: 'smooth', // Smooth scrolling
    });
  }
  hideScroll(element: string) {
    const cardContainer = document.getElementById(element);
    const scrollLeftButton = document.querySelector(
      '#' + element + ' .scroll-left'
    ) as HTMLElement;
    const scrollRightButton = document.querySelector(
      '#' + element + ' .scroll-right'
    ) as HTMLElement;
    scrollLeftButton.style.display = 'none';
    cardContainer?.addEventListener('scroll', function (event) {
      const scrollLeft = cardContainer.scrollLeft;
      const scrollWidth = cardContainer.scrollWidth;
      const clientWidth = cardContainer.clientWidth;
      scrollLeftButton.style.display = scrollLeft === 0 ? 'none' : 'block';
      scrollRightButton.style.display =
        scrollLeft + clientWidth >= scrollWidth ? 'none' : 'block';
    });
  }
}
