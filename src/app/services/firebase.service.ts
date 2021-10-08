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

  createProfile(record){
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

  updateProfile(recordID, record) {
    this.firestore.doc(this.collectionName + '/' + recordID).update(record);
  }

  deleteProfile(recordId) {
    this.firestore.doc(this.collectionName + '/' + recordId).delete();
  }
}
