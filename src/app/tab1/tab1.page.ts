/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


interface ProfileData {
  surname: string;
  firstname: string;
  othernames: string;
  date_of_birth: string;
  mobile_number: string;
  whatsapp_number: string;
  email_address: string;
  profession: string;
  company: string;
  trained_in_gym: string;
  fitness_goal: string;
}


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  profileList = [];
  profileData: ProfileData;
  user: any;

  constructor(
    private firebaseService: FirebaseService,
    public fb: FormBuilder
  ) {
    this.profileData = {} as ProfileData;
  }


  ngOnInit() {
   this.user = localStorage.getItem('user');
   console.dir('UID', this.user);

    this.firebaseService.readProfiles().subscribe(data => {

      this.profileList = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          surname: e.payload.doc.data()['surname'],
          Age: e.payload.doc.data()['Age'],
          Address: e.payload.doc.data()['Address'],
        };
      });
      //console.log(this.profileList);

    });
  }

  createProfile() {
    const userid = localStorage.getItem(this.user.id);
    console.log(userid);
    this.firebaseService.createProfile(this.profileData);
    // .then(resp => {
    //   this.profileForm.reset();
    // })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }

  removeRecord(rowID) {
    this.firebaseService.deleteProfile(rowID);
  }

  editRecord(record) {
    record.isEdit = true;
    record.EditName = record.Name;
    record.EditAge = record.Age;
    record.EditAddress = record.Address;
  }

  updateRecord(recordRow) {
    let record = {};
    record['Name'] = recordRow.EditName;
    record['Age'] = recordRow.EditAge;
    record['Address'] = recordRow.EditAddress;
    this.firebaseService.updateProfile(recordRow.id, record);
    recordRow.isEdit = false;
  }

}
