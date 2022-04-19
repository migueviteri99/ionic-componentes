import { Component, OnInit, ViewChild } from '@angular/core';
import { IonReorderGroup } from '@ionic/angular';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.page.html',
  styleUrls: ['./reorder.page.scss'],
})
export class ReorderPage implements OnInit {
  //@ViewChild(IonReorderGroup)

  personajes: string[] = ['Aquaman', 'Superman', 'Flash', 'Batman'];

  reorderDisable: boolean= true;

  constructor() { }

  ngOnInit() {
  }

  doReorder(event:any) {
    console.log(event);


    //cambiar las posiciioes de los elementos
    const itemMover = this.personajes.splice(event.detail.from, 1)[0];
    this.personajes.splice(event.detail.to, 0, itemMover);


    event.detail.complete();

    console.log(this.personajes);
    
    
  }
}
