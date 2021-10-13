import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference } from '@angular/fire/compat/firestore';
//import { CollectionReference } from '@google-cloud/firestore';


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
    //workoutLog.userId = this.userId;
    console.log('Firbase Service | WorkoutLog', workoutLog);
    return this.firestore.collection(`WorkoutLogs`).add(workoutLog).then(
      () => console.log('WorkoutLog added succesfully')
    ).catch(
      (e) => console.error(e.message)
    );
  }

  loadWorkoutLogs(){
    return this.firestore.collection('WorkoutLogs').valueChanges();
  }
}
