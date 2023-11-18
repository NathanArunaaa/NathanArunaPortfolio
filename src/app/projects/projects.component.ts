import { Component, OnInit } from '@angular/core';
import { SeoService } from './../seo.service';
import { Title } from '@angular/platform-browser';
import  project  from '../../assets/projects.json';

interface projectData {
  title: String;
  link: String;


}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projectData: projectData[] = project;

  constructor(private seo: SeoService, private title: Title) {

  }

  ngOnInit(): void {

    this.title.setTitle('Nathan Aruna | Projects');

    this.seo.generateTags({
      title: 'Nathan Aruna | Home',
      description: 'Nathan Aruna Portfolio Projects Page',
      image: 'https://user-images.githubusercontent.com/88948653/241126694-8ca93461-b74a-4c96-a703-82211f8ffc81.jpg',
      slug: 'home'
    })

}

}
