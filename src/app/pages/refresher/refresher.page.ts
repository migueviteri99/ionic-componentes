import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  items  = new Array(10);
  constructor() { }

  ngOnInit() {
  }

  doRefresh(event) {

    setTimeout(() => {
      this.items = Array(20)
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);

  }

}
