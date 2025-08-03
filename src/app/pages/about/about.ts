import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('About AngularSeoSite - Our Story and Mission');
    
    this.metaService.updateTag(
      { name: 'description', content: 'Learn about AngularSeoSite by Deepak Sharma. Discover our story, mission, and why we are the preferred choice for Angular web development.' }
    );
    
    this.metaService.updateTag(
      { name: 'keywords', content: 'AngularSeoSite, About us, web development company, Angular expertise, responsive design, SEO friendly' }
    );
  }
}
