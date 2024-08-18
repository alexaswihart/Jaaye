import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    "./home.component.scss", "../../styles.scss"
  ]
})
export class HomeComponent implements OnInit{
  isMobile: boolean = false;

  constructor() {}

  ngOnInit() {
    if (typeof window !== "undefined") {
      if (window?.innerWidth < 1000) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    }
  }

 /*  @HostListener('window:resize', ['$event']) onWindowResize() {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 1000) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    }
  } */
}
