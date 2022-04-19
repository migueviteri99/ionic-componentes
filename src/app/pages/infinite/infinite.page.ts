import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScrol: IonInfiniteScroll;

  data: any = Array(20);
  constructor() { }

  ngOnInit() {
  }

  loadData(event) {
    if (this.data.length > 50) {
      this.infiniteScrol.complete();
      this.infiniteScrol.disabled = true;
      return;
    }
    //console.log(event);
    setTimeout(() => {
      const nuevoArr = Array(20);
      this.data.push(...nuevoArr);
      //event.target.complete();
      this.infiniteScrol.complete();
    }, 1500);

  }

}
