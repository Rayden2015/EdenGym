import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Assessments } from '../shared/assements';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  assessment: Assessments;
  assessments: any;
  constructor(private firebase: FirebaseService) {
    this.assessment = {} as Assessments;
  }

  ngOnInit(){
    this.loadAssessments();
  }

  loadAssessments(){
    this.firebase.loadAssessments().subscribe((data) => {
      this.assessments = data;
      console.log('Tabs 3 Page | loadAssessments() | assessments laoded successfully', this.assessments);
    });
  }
}
