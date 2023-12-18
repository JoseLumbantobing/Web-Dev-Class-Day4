import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/model/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {  
  constructor(private loginService: LoginService, private router: Router) {}
  
  login: LoginModel = new LoginModel();
  
  submitLogin(): void {
    if(this.loginService.userVerification(this.login.username, this.login.password)) {
      this.router.navigate(['/profile']);
    } else {
      alert('Login Gagal. Usernama atau password salah!');
    }
  }
}
