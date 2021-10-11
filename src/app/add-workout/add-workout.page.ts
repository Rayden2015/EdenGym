import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';
import { WorkoutLog } from '../shared/workoutLog';

@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.page.html',
  styleUrls: ['./add-workout.page.scss'],
})
export class AddWorkoutPage implements OnInit {
  workoutLog: WorkoutLog;

  constructor(public modalController: ModalController, private firebase: FirebaseService) {
      this.workoutLog = {} as WorkoutLog;
  }

  ngOnInit() {}

  closeModal(){
    this.modalController.dismiss();
  }

  addWorkoutLog(){
      this.firebase.addWorkoutLog(this.workoutLog);
  }

}

