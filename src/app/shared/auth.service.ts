import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn = new BehaviorSubject(false);
  isLoggedIn$: Observable<boolean> = this._isLoggedIn.asObservable();

  // get isLoggedIn$() {
  //   return this._isLoggedIn.asObservable();
  // }

  constructor() { }

  loginSuccess() {
    this._isLoggedIn.next(true);
  }

  logout() {
    this._isLoggedIn.next(false);
  }
}
