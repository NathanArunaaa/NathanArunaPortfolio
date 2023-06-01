import { Component, OnInit } from '@angular/core';
import { SeoService } from './../seo.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private seo: SeoService, private title: Title) {

  }

  ngOnInit(): void {

    this.title.setTitle('Nathan Aruna | Home');

    this.seo.generateTags({
      title: 'Nathan Aruna | Home',
      description: 'Nathan Aruna Portfolio Home Page',
      image: 'https://user-images.githubusercontent.com/88948653/241126694-8ca93461-b74a-4c96-a703-82211f8ffc81.jpg',
      slug: 'home'
    })

}

}
