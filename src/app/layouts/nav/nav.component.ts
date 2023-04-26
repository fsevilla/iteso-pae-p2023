import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tarea } from 'src/app/shared/interfaces/tarea';
import { TareaService } from 'src/app/shared/services/tarea.service';
import { TokenService } from 'src/app/shared/services/token.service';

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
    private router: Router
  ) {
    this.tarea = tareaService.getTarea();
    tareaService.observableTarea.subscribe((tarea: Tarea) => {
      this.tarea = tarea;
    });

    this.tokenService.authStatus.subscribe((status: boolean) => {
      this.logueado = status;
    })
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
