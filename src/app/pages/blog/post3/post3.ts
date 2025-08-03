import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-post3',
  imports: [RouterModule],
  templateUrl: './post3.html',
  styleUrl: './post3.scss'
})
export class Post3Component implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Angular Performance Optimization Tips - AngularSeoSite Blog');
    
    this.metaService.updateTag(
      { name: 'description', content: 'Explore advanced techniques to make your Angular applications faster and more efficient. Learn about lazy loading, tree shaking, and other performance optimization strategies.' }
    );
    
    this.metaService.updateTag(
      { name: 'keywords', content: 'Angular performance, optimization techniques, lazy loading, tree shaking, Angular speed, efficient Angular apps' }
    );
    
    this.metaService.updateTag(
      { name: 'author', content: 'Deepak Sharma' }
    );
    
    this.metaService.updateTag(
      { name: 'date', content: '2024-04-10' }
    );
  }
}
