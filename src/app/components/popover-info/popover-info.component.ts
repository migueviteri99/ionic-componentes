import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {

  items = new Array(10);
  constructor(private popover:PopoverController) { }

  ngOnInit() {}

  onClick(valor: number) {
    console.log(valor);
    this.popover.dismiss({
      item: valor
    });
    
  }

}
