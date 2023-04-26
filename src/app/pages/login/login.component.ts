import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Credenciales } from 'src/app/shared/interfaces/credenciales';
import { LoginService } from 'src/app/shared/services/login.service';
import { TokenService } from 'src/app/shared/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private loginService: LoginService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  credenciales:  Credenciales = { email: '', password: '' };

  iniciarSesion() {
    this.loginService.login(this.credenciales).subscribe((data: any) => {
      // Recibimos el token
      this.tokenService.setToken(data.token);
      // Enviar a tareas
      this.router.navigate(['/tareas']);
    });
  }
}
