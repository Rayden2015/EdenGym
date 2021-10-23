import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';
import { UtilitiesService } from '../shared/utilities.service';

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
    if(localStorage.getItem('user') !== ''){
      this.router.navigateByUrl('/tabs/tabs/tab2',{replaceUrl: true});
    }else{
      console.log('user not logged in');
    }
  }

  async ngOnInit() {


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
