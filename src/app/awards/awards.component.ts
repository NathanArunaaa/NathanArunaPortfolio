import { Component, OnInit } from '@angular/core';
import  award  from '../../assets/award.json';
import { SeoService } from './../seo.service';
import { Title } from '@angular/platform-browser';


interface awardData {
  title: String;
  date: String;

}

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})

export class AwardsComponent implements OnInit {

  awardData: awardData[] = award;

  constructor(private seo: SeoService, private title: Title) {

  }

  ngOnInit(): void {

    this.title.setTitle('Nathan Aruna | Awards');

    this.seo.generateTags({
      title: 'Nathan Aruna | Awards',
      description: 'Nathan Aruna Portfolio Award Page',
      image: 'https://user-images.githubusercontent.com/88948653/241126694-8ca93461-b74a-4c96-a703-82211f8ffc81.jpg',
      slug: 'home'
    })

}
}
