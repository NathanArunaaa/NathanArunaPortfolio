import { Component } from '@angular/core';

import  publications  from '../../assets/publications.json';
import { SeoService } from './../seo.service';
import { Title } from '@angular/platform-browser';

interface publicationData {
  title: String;
  link: String;


}
@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent {

  publicationData: publicationData[] = publications;

  constructor(private seo: SeoService, private title: Title) {

  }
  ngOnInit(): void {

    this.title.setTitle('Nathan Aruna | Publications');

    this.seo.generateTags({
      title: 'Nathan Aruna | Publications',
      description: 'Nathan Aruna Publications Page',
      image: 'https://user-images.githubusercontent.com/88948653/241126694-8ca93461-b74a-4c96-a703-82211f8ffc81.jpg',
      slug: 'home'
    })

}

}
