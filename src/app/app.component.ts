import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    "./app.component.scss", "../styles.scss"
  ]
})
export class AppComponent implements OnInit{
  constructor(
    private router: Router
  ) {}

  scrolled: boolean = false;
  isMobile: boolean = false;
  menuActive: boolean = false;

  ngOnInit() {
    if (typeof window !== "undefined") {
      if (window?.innerWidth < 1000) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
   }
  }

  toggleMenuActive() {
    this.menuActive = !this.menuActive;
  }

  @HostListener('window:scroll', ['$event']) onScroll() {
    if (typeof window !== "undefined") {
      if (window.scrollY > 50) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      } 
    } 
  }

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    if (typeof window !== "undefined") {
      window.scrollTo(0,0);
    }
  }

  @HostListener('window:resize', ['$event']) onWindowResize() {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 1000) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    }
  }
}
