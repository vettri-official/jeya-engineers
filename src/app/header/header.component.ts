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
      label: 'About us',
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
      label: 'Blog',
      value: '/blog',
    },
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
