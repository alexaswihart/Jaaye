import { Component, OnInit } from '@angular/core';
import { Event } from './event';
import eventData from '../../assets/events.json';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: [
    "./calendar.component.scss", "../../styles.scss"
  ]
})
export class CalendarComponent implements OnInit{
  constructor() {}

  upcomingEvents: Event[] = [];
  pastEvents: Event[] = [];

  ngOnInit() {
    var today = new Date();

    var events = eventData as Event[];
    this.upcomingEvents = events.filter(e => new Date(this.getMonthNumber(e.date?.month ?? "") + "-" + e.date?.day + "-" + e.date?.year) >= today);
    this.pastEvents = events.filter(e => new Date(e.date?.month + "-" + e.date?.day + "-" + e.date?.year) < today);
  }

  getMonthNumber(month: string) {
    return new Date(Date.parse(month +" 1, 2000")).getMonth()+1;
  }
}
