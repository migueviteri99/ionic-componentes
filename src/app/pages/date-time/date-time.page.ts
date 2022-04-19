import { Component, OnInit, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;

  fechaNaci: Date = new Date();

  customYearValues = [2025,2024,2023];

  constructor() { }

  ngOnInit() {
  }

  cambioFecha(event) {
    console.log(event);
    console.log(new Date(event.detail.value));
  }

  hola() {
    this.datetime.confirm();
    
  }

  mundo() {
    this.datetime.reset();
  }

}
