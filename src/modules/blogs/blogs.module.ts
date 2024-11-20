import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

@NgModule({
  declarations: [BlogComponent, BlogDetailsComponent],
  imports: [CommonModule, BlogsRoutingModule],
})
export class BlogsModule {}
