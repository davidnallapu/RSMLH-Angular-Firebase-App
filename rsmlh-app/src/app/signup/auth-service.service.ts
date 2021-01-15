import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {tap} from 'rxjs/operators'
import { Subject, BehaviorSubject } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';

export interface AuthResponseData{
  email	:string;	
  idToken	:string;	
  refreshToken	:string;	
  expiresIn:	string;
  localId	:string;
  registered?:	boolean;

}
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  user = new BehaviorSubject<User>(null);
  private tokenExpirationTimer: any;


  constructor(private http: HttpClient,private router: Router) { }



  login(email: string, password: string){
    return this.http.post<AuthResponseData>(
      'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBGuN85anPKKB0w1i5uDy-FJqkGtwGMAEI',{
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).pipe(
      tap(resData => {
        this.handleAuthentication(
          resData.email,
          resData.localId,
          resData.idToken,
          +resData.expiresIn
        );
      })
    );
}


    logout() {
      this.user.next(null);
      this.router.navigate(['/']);
      localStorage.removeItem('userData');
      if (this.tokenExpirationTimer) {
        clearTimeout(this.tokenExpirationTimer);
      }
      this.tokenExpirationTimer = null;
    }
  
    autoLogout(expirationDuration: number) {
      this.tokenExpirationTimer = setTimeout(() => {
        this.logout();
      }, expirationDuration);
    }

    private handleAuthentication(
      email: string,
      userId: string,
      token: string,
      expiresIn: number
    ) {
      const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
      const user = new User(email, userId, token, expirationDate);
      this.user.next(user);
      this.autoLogout(expiresIn * 1000);
      localStorage.setItem('userData', JSON.stringify(user));
    }
  
  
}
