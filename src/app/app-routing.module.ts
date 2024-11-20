import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('../modules/home/home.component').then((x) => x.HomeComponent),
  },
  {
    path: 'about-us',
    loadComponent: () =>
      import('../modules/about-us/about-us.component').then(
        (x) => x.AboutUsComponent
      ),
  },
  {
    path: 'gallery',
    loadComponent: () =>
      import('../modules/gallery/gallery.component').then(
        (x) => x.GalleryComponent
      ),
  },
  {
    path: 'blogs',
    loadChildren: () =>
      import('../modules/blogs/blogs.module').then((x) => x.BlogsModule),
  },
  {
    path: 'contact-us',
    loadComponent: () =>
      import('../modules/contact-us/contact-us.component').then(
        (x) => x.ContactUsComponent
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Restores the scroll position
      anchorScrolling: 'enabled', // Enables anchor navigation (e.g., #section)
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
