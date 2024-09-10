import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: [
    "./music.component.scss", "../../styles.scss"
  ]
})
export class MusicComponent implements OnInit{
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
}
