import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';
import { UtilitiesService } from '../shared/utilities.service';
import { Tab1Page } from '../tab1/tab1.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public router: Router,
    public utility: UtilitiesService
  ) {
  }

  async ngOnInit() {
    const isLoggedIn = await this.authService.isLoggedIn();
    if(isLoggedIn ){
      this.router.navigateByUrl('/tabs/tabs/tab1', {replaceUrl: true});
    }else{
      return true;
    }
  }

  logIn(email, password) {
    this.authService.SignIn(email.value, password.value)
      .then((res) => {
        if(this.authService.isEmailVerified) {
          this.router.navigateByUrl('/tabs/tabs/tab1', {replaceUrl: true});
        } else {
          this.utility.presentAlert('Email Verification', 'Email is not verified');
          return false;
        }
      }).catch((error) => {
        this.utility.presentAlert('Email Verification', error.message);
      });
  }

}
