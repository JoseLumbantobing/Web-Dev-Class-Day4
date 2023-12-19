import { Injectable } from '@angular/core';
import { LoginModel } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  loginList: LoginModel[] = [
    {
      username: 'Albert Alberto',
      password: 'password1'
    },
    {
      username: 'Juan Juanda',
      password: 'password2'
    },
    {
      username: 'Jacob Widodo',
      password: 'password3'
    }
  ];


  userVerification(_username: string, _password: string): boolean {
    const matchedUser = this.loginList.find(x => x.username === _username && x.password === _password);

    if(matchedUser) {
      return true;
    } else {
      return false;
    }
  }
}
