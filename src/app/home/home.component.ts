import { Component, OnInit } from '@angular/core';
import { SeoService } from './../seo.service';
import { Title } from '@angular/platform-browser';
import  home  from '../../assets/home.json';

interface homeData {
  image: String;
  date: String;
  title: String;
  description: String;
  learnMore: String;
  imagealt: String;


}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit{

  homeData: homeData[] = home;


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
