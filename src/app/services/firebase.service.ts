import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  collectionName = 'profiles';
  user: any;

  constructor(
    private firestore: AngularFirestore
  ) { }

  createProfile(record){
    this.user = JSON.parse(localStorage.getItem('user'));
    const userId = this.user.uid;
    console.log('User', userId );
    //console.log('Userid',userId);
    this.firestore.doc(`profiles/${userId}`).set(record).then(
      () => console.log('Profile Updated Succesfully')
    );
  }

  readProfiles() {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  readLoggedInProfile(uid){
    return this.firestore.collection(this.collectionName).doc(uid);
  }

  updateProfile(recordID, record) {
    this.firestore.doc(this.collectionName + '/' + recordID).update(record);
  }

  deleteProfile(recordId) {
    this.firestore.doc(this.collectionName + '/' + recordId).delete();
  }
}
