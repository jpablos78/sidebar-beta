import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  get isLoggedIn() {
    return this._loggedIn.asObservable();
  }

  login() {
    this._loggedIn.next(true);
  }
}
