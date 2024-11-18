import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import swictchColor from '../../utilities/functions/navbar-color';

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
  }
  serviceArr: any[] = [
    {
      title: 'Marine Gearbox',
      subject:
        'High-performance servicing and repairs for seamless marine operations.',
    },
    {
      title: 'Hydraulics',
      subject:
        'Expert maintenance and repair to ensure reliability and safety.',
    },
    {
      title: 'Escorts Cranes',
      subject:
        'Professional servicing for optimal lifting and handling performance.',
    },
  ];
}
