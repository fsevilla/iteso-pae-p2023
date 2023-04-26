import { Component } from '@angular/core';

import { Tarea } from 'src/app/shared/interfaces/tarea';
import { TareaService } from 'src/app/shared/services/tarea.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent {

  tareas: Array<Tarea> = [];
  tarea: Tarea = {
    titulo: '',
    descripcion: '',
    status: ''
  }

  constructor(private tareaService: TareaService) {
    this.traerTareas();
  }

  traerTareas() {
    this.tareaService.getTareas().subscribe((response: any) => {
      this.tareas = response;
    });
  }

  setTarea(tarea: Tarea) {
    this.tarea = tarea;
    this.tareaService.setTarea(tarea);
  }


}




