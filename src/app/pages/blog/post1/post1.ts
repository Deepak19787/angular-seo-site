import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-post1',
  imports: [RouterModule],
  templateUrl: './post1.html',
  styleUrls: ['./post1.scss']
})
export class Post1Component implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Getting Started with Angular SEO - AngularSeoSite Blog');
    
    this.metaService.updateTag(
      { name: 'description', content: 'Learn the fundamentals of optimizing your Angular applications for search engines. Discover key SEO strategies for Angular including server-side rendering and dynamic meta tags.' }
    );
    
    this.metaService.updateTag(
      { name: 'keywords', content: 'Angular SEO, search engine optimization, Angular Universal, server-side rendering, meta tags, Angular applications' }
    );
    
    this.metaService.updateTag(
      { name: 'author', content: 'Deepak Sharma' }
    );
    
    this.metaService.updateTag(
      { name: 'date', content: '2024-05-15' }
    );
  }
}
