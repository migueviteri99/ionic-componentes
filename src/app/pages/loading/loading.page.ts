import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading: HTMLIonLoadingElement; //PARA SABER Q PROPIEDADES TIENE

    constructor(private loadCtrl: LoadingController) { }

ngOnInit() {
}
mostrarLoading(){
  this.presentLoading("Aguanta!");
  setTimeout(() => {
    this.loading.dismiss();
  }, 2000);
}

  async presentLoading(message: string) {
  this.loading = await this.loadCtrl.create({
    //cssClass: 'my-custom-class',
    message,
    //duration: 2000
  });
  await this.loading.present();
}

}
