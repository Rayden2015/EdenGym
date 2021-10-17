import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { AuthenticationService } from '../shared/authentication.service';
import { WorkoutLog } from '../shared/workoutLog';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  workoutLogs: any;

  constructor(public router: Router, private firebase: FirebaseService, private auth: AuthenticationService) {
    this.workoutLogs = {} as WorkoutLog;
  }

  ngOnInit() {
    this.loadWorkoutLogs();
  }

  async addWorkoutLogModal(){
   this.router.navigateByUrl('dashboard');
  }

  closeModal(){
    //this.modalController.dismiss();
  }

  loadWorkoutLogs(){
    this.firebase.loadWorkoutLogs().subscribe((data) =>{
      console.log('WorkoutLog',data);
      this.workoutLogs = data;
    });
  }

  
}


