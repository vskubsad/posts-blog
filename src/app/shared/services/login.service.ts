import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  private isUserLoggedIn = new BehaviorSubject(false);
  loginStatus= this.isUserLoggedIn.asObservable();

  changeLoginStatus(loginInfo:boolean) {
    this.isUserLoggedIn.next(loginInfo);
  }
}
