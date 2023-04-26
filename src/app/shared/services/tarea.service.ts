import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Tarea } from '../interfaces/tarea';

import { BehaviorSubject } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  observableTarea: BehaviorSubject<Tarea>;

  tareaSeleccionada: Tarea = {
    titulo: '',
    descripcion: '',
    status: ''
  }

  constructor(private httpService: HttpService) {
    this.observableTarea = new BehaviorSubject(this.tareaSeleccionada);
  }

  getTareas() {
    const url: string = environment.apiUrl + 'todos';
    return this.httpService.get(url);
  }

  setTarea(tarea: Tarea): void {
    this.tareaSeleccionada = tarea;
    this.observableTarea.next(tarea);
  }

  getTarea(): Tarea {
    return this.tareaSeleccionada;
  }
}
