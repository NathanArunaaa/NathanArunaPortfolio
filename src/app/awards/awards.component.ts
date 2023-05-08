import { Component, OnInit } from '@angular/core';
import  award  from '../../assets/award.json';



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
  constructor() { }

  ngOnInit(): void {

}
}
