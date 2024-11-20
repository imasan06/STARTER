// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    console.log('Login attempt:', this.username, this.password); // Add logging

    if (this.authService.login(this.username, this.password)) {
      console.log('Login successful');
      this.router.navigate(['/crud']);
    } else {
      console.log('Login failed');
      this.errorMessage = 'Credenciales inválidas';
    }
    if (this.authService.login(this.username, this.password)) {
      
    }
  }
}