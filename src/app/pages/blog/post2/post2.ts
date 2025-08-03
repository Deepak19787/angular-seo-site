import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-post2',
  imports: [RouterModule],
  templateUrl: './post2.html',
  styleUrl: './post2.scss'
})
export class Post2Component implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Building Responsive Angular Apps - AngularSeoSite Blog');
    
    this.metaService.updateTag(
      { name: 'description', content: 'Discover best practices for creating responsive designs that work seamlessly across all devices. Learn how to implement mobile-first approaches in your Angular applications.' }
    );
    
    this.metaService.updateTag(
      { name: 'keywords', content: 'Angular responsive design, mobile-first development, Angular apps, cross-device compatibility, CSS media queries, flexible layouts' }
    );
    
    this.metaService.updateTag(
      { name: 'author', content: 'Deepak Sharma' }
    );
    
    this.metaService.updateTag(
      { name: 'date', content: '2024-04-28' }
    );
  }
}
