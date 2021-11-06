import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';
import { UtilitiesService } from '../shared/utilities.service';
import { WorkoutLog } from '../shared/workoutLog';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})

export class DashboardPage implements OnInit {
  workoutLog: WorkoutLog;
  workoutNames: any;
  instructorNames: any;

  constructor(
    public modalController: ModalController,
    private firebase: FirebaseService,
    private router: Router,
    private utilities: UtilitiesService
    ) {
       //workout:'Pilatest Tets'
       this.workoutLog = {} as WorkoutLog;
  }

  ngOnInit() {
    this.loadWorkoutNames();
    this.loadInstructors();
    //this.workoutLog.date = Date.now().toString();
  }


  closeModal(){
    this.modalController.dismiss();
  }

  addWorkoutLog(){
      console.log('AddWotkoutPage | addworkoutLog() | WorkoutLog', this.workoutLog);
      this.firebase.addWorkoutLog(this.workoutLog).then(
        () => {
          this.utilities.presentAlert('Workout','Wourkout Saved Successfully');
          this.router.navigateByUrl('/tabs/tabs/tab2',{replaceUrl: true});
        }
      ).catch(
        (e) => {
            this.utilities.presentAlert('Save Wrokout Error',e.message);
           console.error('Add Workout Page | addWorkoutLog : ', e.message);

        }
      );

  }

  loadWorkoutNames(){
    this.firebase.loadWorkoutNames().subscribe((data) => {
      console.log('WorkoutNames', data);
      this.workoutNames = data;
    });
  }

  loadInstructors(){
    this.firebase.loadInstructors().subscribe((data) => {
      console.log('Add Workout page | loadInstructors() | ', data);
      this.instructorNames = data;
    });
  }

}


