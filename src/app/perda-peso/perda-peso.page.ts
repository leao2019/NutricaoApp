import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-perda-peso',
  templateUrl: './perda-peso.page.html',
  styleUrls: ['./perda-peso.page.scss'],
})
export class PerdaPesoPage implements OnInit {

  constructor(public alertController: AlertController,public toastController: ToastController) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Deseja realmente favoritar?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim, Favoritar',
          id: 'confirm-button',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }
  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Alimento adicionado ao favoritos.',
      duration: 2000,
      color:'success'
    });
    toast.present();
  }


}

