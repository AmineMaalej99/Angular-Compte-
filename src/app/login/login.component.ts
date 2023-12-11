import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/AuthService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!: string;
  password!: string;
  errorMessage = 'Invalid Credentials';
  successMessage!: string;
  invalidLogin = false;
  loginSuccess = false;

  constructor(private authService: AuthService , private router:Router) {}

  ngOnInit(): void {
  }

  handleLogin() {
    // Vérifiez si les identifiants sont corrects
    if (this.username === 'Admin@gmail.com' && this.password === 'admin2023') {
      // Appel à votre service d'authentification
      this.authService.login(this.username, this.password).subscribe(
        (result) => {
          this.invalidLogin = false;
          this.loginSuccess = true;
          this.successMessage = 'Login Successful';

          // Redirigez vers la page "/comptes" si les identifiants sont corrects
          this.router.navigate(['/comptes']);
        },
        () => {
          this.invalidLogin = true;
          this.loginSuccess = false;
        }
      );
    } else {
      // Affichez un message d'erreur si les identifiants ne sont pas corrects
      this.invalidLogin = true;
      this.loginSuccess = false;
      this.errorMessage = 'Invalid Credentials';
    }
  }
}


