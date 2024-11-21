import { Component } from '@angular/core';
import swictchColor from 'src/utilities/functions/navbar-color';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
  ngOnInit(): void {
    swictchColor();
  }
}
