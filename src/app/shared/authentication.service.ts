/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import  auth  from 'firebase/compat/app';
import { User } from './user';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { NgZone } from '@angular/core';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData: any;

  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {

  }


  // Login in with email/password
  SignIn(email, password) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }

  // Register user with email/password
  RegisterUser(email, password) {
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password);
  }

  // Email verification when new user register
  SendVerificationMail() {
    // return this.ngFireAuth.auth.currentUser.sendEmailVerification()
    // .then(() => {
    //   this.router.navigate(['verify-email']);
    // });
  }

  // Recover password
  PasswordRecover(passwordResetEmail) {
    return this.ngFireAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email has been sent, please check your inbox.');
    }).catch((error) => {
      window.alert(error);
    });
  }

  // Returns true when user is looged in
  isLoggedIn() {
      return this.ngFireAuth.authState.pipe(first()).toPromise();
  }

  // Returns true when user's email is verified
  get isEmailVerified(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user.emailVerified !== false) ? true : false;
  }

  // Sign in with Gmail
  GoogleAuth() {
    return this.AuthLogin(new auth.auth.GoogleAuthProvider());
  }

  // Auth providers
  AuthLogin(provider) {
    return this.ngFireAuth.signInWithPopup(provider)
    .then((result) => {
       this.ngZone.run(() => {
         console.log('Authentication Serivce | AuthLogin| login succesful');
          this.router.navigateByUrl('/tabs/tabs/tab1');
        });
      this.SetUserData(result.user);
      localStorage.setItem('user', result.user.uid);
    }).catch((error) => {
      console.error('Authentication Service | Authlogin() | error : ', error);
      window.alert(error.message);
    });
  }

  // Store user in localStorage
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afStore.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    };
    return userRef.set(userData, {
      merge: true
    });
  }

  // Sign-out
  SignOut() {
    console.log('Authentication Service | SignOut()');
    return this.ngFireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      localStorage.clear();
      this.router.navigateByUrl('/login', {replaceUrl: true});
    }).catch((e) => {
      console.error('SignOut | error ', e.message);
    });
  }

  getAuthId(){
    return this.ngFireAuth.authState.subscribe();
  }

}
