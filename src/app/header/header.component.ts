import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private router: Router) {}

  menuArr: typeMenu[] = [
    {
      label: 'Home',
      value: '/home',
    },
    {
      label: 'About Us',
      value: '/about-us',
    },
    {
      label: 'Solutions',
      value: '/solutions',
    },
    {
      label: 'Gallery',
      value: '/gallery',
    },
    {
      label: 'Blogs',
      value: '/blogs',
    },
  ];

  solutionsArr: string[] = [
    'Winch',
    'Escorts Cranes',
    'Power steering',
    'FEL (Front-End Loader)',
    'Marine Gearbox Services',
    'Hydraulic Systems Support',
    'Kalmar and Reach Stackers',
    'PPM and Top Lift Solutions',
    'Grab Equipment Maintenance',
    'Mechanical Repair and Maintenance',
  ];

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.closeMenu();
      }
    });
  }

  openMenu() {
    let nav = document.querySelector('.mobile-navbar');
    nav?.classList.add('show');
  }

  closeMenu() {
    let nav = document.querySelector('.mobile-navbar');
    nav?.classList.remove('show');
  }
}

type typeMenu = {
  label: string;
  value: string;
};
