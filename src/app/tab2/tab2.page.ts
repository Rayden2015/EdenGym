import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddWorkoutPage } from '../add-workout/add-workout.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public modalController: ModalController) {}

  async addWorkoutLogModal(){
    const modal = await this.modalController.create({
      component: AddWorkoutPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  closeModal(){
    this.modalController.dismiss();
  }
  }


