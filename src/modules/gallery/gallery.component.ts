import { Component } from '@angular/core';
import swictchColor from 'src/utilities/functions/navbar-color';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  constructor(private activatedRoute: ActivatedRoute) {}
  chosenIndex: number = 0;
  ngOnInit(): void {
    swictchColor('#gallery');
    this.activatedRoute.queryParams.subscribe((res: any) => {
      this.chosenIndex = res?.id || 0;
    });
  }
  tabIndex: number = 0;
  tabArr: string[] = [
    'All',
    'Power Steering',
    'Winch',
    'Winch Gear Box',
    'Hydraulics',
    'Grab System',
  ];
  slideArr: any[] = [
    {
      image: 'assets/images/gallery/img1.jpg',
    },
    {
      image: 'assets/images/gallery/img2.jpg',
    },
    {
      image: 'assets/images/gallery/img3.jpg',
    },
  ];
  galleryArr: any[] = [
    {
      image: 'assets/images/gallery/img1.jpg',
    },
    {
      image: 'assets/images/gallery/img2.jpg',
    },
    {
      image: 'assets/images/gallery/img3.jpg',
    },
    {
      image: 'assets/images/gallery/img1.jpg',
    },
    {
      image: 'assets/images/gallery/img2.jpg',
    },
    {
      image: 'assets/images/gallery/img3.jpg',
    },
  ];
}
