import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './blog.html',
  styleUrls: ['./blog.scss']
})
export class BlogComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('AngularSeoSite Blog - Latest Insights and Updates');
    
    this.metaService.updateTag(
      { name: 'description', content: 'Explore the latest insights and updates from AngularSeoSite. Learn about Angular best practices, SEO techniques, and web development trends.' }
    );
    
    this.metaService.updateTag(
      { name: 'keywords', content: 'Angular blog, web development insights, SEO techniques, Angular best practices, web development trends' }
    );
  }
}
