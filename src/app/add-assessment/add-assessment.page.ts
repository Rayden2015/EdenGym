import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { Assessments } from '../shared/assements';

@Component({
  selector: 'app-add-assessment',
  templateUrl: './add-assessment.page.html',
  styleUrls: ['./add-assessment.page.scss'],
})
export class AddAssessmentPage implements OnInit {
  assessment: Assessments;
  assessments: any;

  constructor(private firebase: FirebaseService, private router: Router) {
    this.assessment = {} as Assessments;
  }

  ngOnInit() {

  }

  addAssessment(){
    this.firebase.addAssessment(this.assessment).then(
      () => {
        console.log('Assessment | Saved Succesfully');
        this.router.navigateByUrl('/tabs/tabs/tab3');
      }
    ).catch((e) => console.error(e.message));
  }

  loadAssessments(){

  }

}
