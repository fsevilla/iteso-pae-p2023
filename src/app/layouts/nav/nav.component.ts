import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';

import { Tarea } from 'src/app/shared/interfaces/tarea';
import { TareaService } from 'src/app/shared/services/tarea.service';
import { TokenService } from 'src/app/shared/services/token.service';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  logueado: boolean = false;
  tarea: Tarea;

  constructor(
    tareaService: TareaService,
    private tokenService: TokenService,
    private router: Router,
    private socialAuthService: SocialAuthService,
    private loginService: LoginService
  ) {
    this.tarea = tareaService.getTarea();
    tareaService.observableTarea.subscribe((tarea: Tarea) => {
      this.tarea = tarea;
    });

    this.tokenService.authStatus.subscribe((status: boolean) => {
      this.logueado = status;
    })

    this.socialAuthService.authState.subscribe((user: SocialUser) => {
      if(user) {
        console.log('Usuario de Google', user);
        this.loginService.googleLogin(user.idToken).subscribe(response => {
          this.tokenService.setToken(response.token);
          this.router.navigate(['/tareas']);
        });
      }
    });
  }

  links: any = {
    'home': '/',
    'tareas': '/tareas'
  }

  cerrarSesion() {
    this.tokenService.deleteToken();
    this.router.navigate(['/login']);
  }

}
