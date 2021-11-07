import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(public auth: AuthenticationService, private router: Router) { }

  canActivate(): boolean {
    if(this.auth.isLoggedIn()){
      console.log('AuthGuard | isLoggedin | true');
      return true;
    }else{
      console.log('AuthGuard | isLoggedin | false');
      this.router.navigate(['/login']);
    }
  }
}
