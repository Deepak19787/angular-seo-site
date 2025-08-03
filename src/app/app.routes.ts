import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { ContactComponent } from './pages/contact/contact';
import { BlogComponent } from './pages/blog/blog';
import { Post1Component } from './pages/blog/post1/post1';
import { Post2Component } from './pages/blog/post2/post2';
import { Post3Component } from './pages/blog/post3/post3';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/post1', component: Post1Component },
  { path: 'blog/post2', component: Post2Component },
  { path: 'blog/post3', component: Post3Component },
  { path: '**', redirectTo: '' }
];
