import { Component } from '@angular/core';
import swictchColor from 'src/utilities/functions/navbar-color';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  ngOnInit(): void {
    swictchColor('#contact');
  }
}
