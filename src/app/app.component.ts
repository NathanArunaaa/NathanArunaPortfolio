import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'NathanArunaPortfolio';
  isLoading: boolean = true;

  ngOnInit() {
    const minLoadTime = 500;
    const maxLoadTime = 2000;
    const loadTime = Math.floor(Math.random() * (maxLoadTime - minLoadTime + 1)) + minLoadTime;

    setTimeout(() => {
      this.isLoading = false;
    }, loadTime);
  }
}
