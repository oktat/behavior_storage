import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Form, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm = this.builder.group({
    username: 'admin',
    password: 'titok'
  });

  constructor(
    private authService: AuthService,
    private builder: FormBuilder,
    private router: Router
  ) { }

  login() {
    if(this.loginForm.value.username == 'admin' && 
      this.loginForm.value.password == 'titok') {

      const token = 'titkos_token'
      this.authService.loginSuccess(token);
      this.router.navigate(['employee']);
    } 
  }
}
