import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  private _storage: Storage | null = null;

  constructor(public storage: Storage, public alertController: AlertController, public loadingController: LoadingController) {
    this.init();
  }

  async init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public set(key: string, value: any){
      this._storage?.set(key, value);
  }

  async presentAlert(header, message) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: header,
      subHeader: 'Subtitle',
      message: message,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentLoading(message) {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: message
      // duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }



}
