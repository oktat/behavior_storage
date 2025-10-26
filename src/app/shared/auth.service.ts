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

  constructor() { 
    const token = localStorage.getItem('auth_token');
    const initialStatus = !!token;
    this._isLoggedIn.next(initialStatus);
  }

  loginSuccess(token: string) {
    localStorage.setItem('auth_token', token);
    this._isLoggedIn.next(true);    
  }

  logout() {
    localStorage.removeItem('auth_token');
    this._isLoggedIn.next(false);
  }
}
