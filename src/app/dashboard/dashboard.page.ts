import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';
import { WorkoutLog } from '../shared/workoutLog';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})

export class DashboardPage implements OnInit {
  workoutLog: WorkoutLog;
  workoutNames: any;
  test = 'Test Mic';

  constructor(public modalController: ModalController, private firebase: FirebaseService, private router: Router) {
       //workout:'Pilatest Tets'
       this.workoutLog = {} as WorkoutLog;
  }

  ngOnInit() {

    console.log('ngOnInit', this.workoutLog);
    this.loadWorkoutNames();
    //this.workoutLog.date = Date.now().toString();
  }

  whatsThere(){
    console.log('What sis there' , this.workoutLog);
  }

  closeModal(){
    this.modalController.dismiss();
  }

  addWorkoutLog(){
      console.log('AddWotkoutPage | addworkoutLog() | WorkoutLog', this.workoutLog);
      this.firebase.addWorkoutLog(this.workoutLog);
      this.router.navigateByUrl('/tabs/tabs/tab2');
  }

  loadWorkoutNames(){
    this.firebase.loadWorkoutNames().subscribe((data) => {
      console.log('WorkoutNames', data);
      this.workoutNames = data;
    });
  }

}


