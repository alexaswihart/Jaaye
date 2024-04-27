import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    "./app.component.scss", "../styles.scss"
  ]
})
export class AppComponent {
  scrolled: boolean = false;

  constructor(
    private router: Router
  ) {}

  @HostListener('window:scroll', ['$event']) onScroll() {
    if (window.scrollY > 50) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    window.scrollTo(0,0);
  }
}
