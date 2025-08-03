import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('AngularSeoSite - Modern Web Solutions with Angular');
    
    this.metaService.updateTag(
      { name: 'description', content: 'Discover high-performance, SEO-friendly websites and applications built with the latest Angular technologies. Specializing in modern web solutions.' }
    );
    
    this.metaService.updateTag(
      { name: 'keywords', content: 'Angular, SEO, web development, responsive design, modern web applications' }
    );
  }
}
