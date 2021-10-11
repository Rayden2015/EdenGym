/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UtilitiesService } from '../shared/utilities.service';
import { LoadingController } from '@ionic/angular';



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
    public utility: UtilitiesService,
    private loadingController : LoadingController
  ) {
    this.profileData = {} as ProfileData;
  }


  ngOnInit() {
    this.readLoginProfile();
  }

  async readLoginProfile(){
    //Loader
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Loading Profile'
      // duration: 2000
    });
    await loading.present();

    //Getting User uid from Local Storage
    this.user = JSON.parse(localStorage.getItem('user'));
    const userId = this.user.uid;
    console.log('User id', userId );

    //Loading Login Profile from Firebase
		this.firebaseService.readLoggedInProfile(userId).subscribe(data => {
      console.log('Login Profile :',data);
      this.profileData.company = data["company"];
      this.profileData.firstname = data["firstname"];
      this.profileData.surname = data["surname"];
      this.profileData.othernames = data["othernames"];
      this.profileData.date_of_birth = data["date_of_birth"];
      this.profileData.mobile_number = data["mobile_number"];
      this.profileData.whatsapp_number = data["whatsapp_number"];
      this.profileData.email_address = data["email_address"];
      this.profileData.profession = data["profession"];
      this.profileData.trained_in_gym = data["trained_in_gym"];
      this.profileData.fitness_goal = data["fitness_goal"];

      //Dismissing Loader
      loading.dismiss();
      console.log('Loading dismissed!');
  });



  }

updateProfile() {
    const userid = localStorage.getItem(this.user.id);
    console.log(userid);

    try {
      this.firebaseService.updateProfile(this.profileData);
      this.utility.presentAlert('Proifle', 'Profile Updated Successfully');
    }catch(e){
      this.utility.presentAlert('Profile', e.message);
    }

  }


}
