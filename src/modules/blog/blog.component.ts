import { Component } from '@angular/core';
import swictchColor from '../../utilities/functions/navbar-color';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  ngOnInit(): void {
    swictchColor('#contact');
  }
}
