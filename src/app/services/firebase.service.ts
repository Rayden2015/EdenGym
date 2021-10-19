import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  collectionName = 'profiles';
  user: any;
  userId: string;

  constructor(
    private firestore: AngularFirestore
  ) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.userId = this.user.uid;
    console.log('User', this.userId );
    //console.log('Userid',userId);
  }

  updateProfile(record){
    this.firestore.doc(`profiles/${this.userId}`).set(record).then(
      () => console.log('Profile Updated Succesfully')
    );
  }

  readProfiles() {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }



  readLoggedInProfile(uid){
    return this.firestore.collection(this.collectionName).doc(uid).valueChanges();
  }

  // updateProfile(recordID, record) {
  //   this.firestore.doc(this.collectionName + '/' + recordID).update(record);
  // }

  deleteProfile(recordId) {
    this.firestore.doc(this.collectionName + '/' + recordId).delete();
  }

  loadWorkoutsList(){
    return this.firestore.collection('listOfWorkouts').valueChanges();
  }

  addWorkoutLog(workoutLog){
    workoutLog.userId = this.userId;
    console.log('Firbase Service | WorkoutLog', workoutLog);
    return this.firestore.collection(`WorkoutLogs`).add(workoutLog).then(
      () => console.log('WorkoutLog added succesfully')
    ).catch(
      (e) => console.error(e.message)
    );
  }

  loadWorkoutLogs(){
    return this.firestore.collection('WorkoutLogs',ref => ref.where('userId','==', this.userId).orderBy('date','desc')).valueChanges();
  }

  loadWorkoutNames(){
    return this.firestore.collection('workoutNames', ref => ref.orderBy('name','desc')).valueChanges();
  }

  addAssessment(assessment){
    assessment.userId = this.userId;
    return this.firestore.collection('assessments').add(assessment);
  }

  loadAssessments(){
    return this.firestore.collection('assessments', ref => ref.where('userId','==', this.userId).orderBy('date','desc')).valueChanges();
  }
}
