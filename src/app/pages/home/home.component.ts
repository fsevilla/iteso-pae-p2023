import { Component } from '@angular/core';

import { Tarea } from 'src/app/shared/interfaces/tarea';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  tareas: Array<Tarea> = [];
  cargando: boolean = false;

  constructor() {
    this.cargando = true;
    setTimeout(() => {
      this.tareas = [
        {
          titulo: 'Tarea 1',
          descripcion: 'lorem ipsum dolor sit amet 1',
          status: 'new'
        },
        {
          titulo: 'Tarea 2',
          descripcion: 'lorem ipsum dolor sit amet 2',
          status: 'new'
        }
      ]
      
      this.cargando = false;
    },3000);
  }
}
