import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Contact AngularSeoSite - Get in Touch with Our Team');
    
    this.metaService.updateTag(
      { name: 'description', content: 'Contact AngularSeoSite by Deepak Sharma. Reach out to our team for web development inquiries, project consultations, or support requests.' }
    );
    
    this.metaService.updateTag(
      { name: 'keywords', content: 'Contact AngularSeoSite, web development inquiry, Angular consultation, project support, contact form' }
    );
  }
}
