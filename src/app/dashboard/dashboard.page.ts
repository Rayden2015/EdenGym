import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
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

  constructor(public modalController: ModalController, private firebase: FirebaseService, private router: Router) {
       //workout:'Pilatest Tets'
       this.workoutLog = {} as WorkoutLog;
  }

  ngOnInit() {
    this.loadWorkoutNames();
    //this.workoutLog.date = Date.now().toString();
  }


  closeModal(){
    this.modalController.dismiss();
  }

  addWorkoutLog(){
      console.log('AddWotkoutPage | addworkoutLog() | WorkoutLog', this.workoutLog);
      this.firebase.addWorkoutLog(this.workoutLog);
      this.router.navigateByUrl('/tabs/tabs/tab2',{replaceUrl: true});
  }

  loadWorkoutNames(){
    this.firebase.loadWorkoutNames().subscribe((data) => {
      console.log('WorkoutNames', data);
      this.workoutNames = data;
    });
  }

}


