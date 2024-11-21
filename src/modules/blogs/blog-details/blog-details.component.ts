import { Component } from '@angular/core';
import swictchColor from 'src/utilities/functions/navbar-color';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.scss',
})
export class BlogDetailsComponent {
  ngOnInit(): void {
    swictchColor('.blog-post');
  }
}
