import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Tarea } from '../interfaces/tarea';

import { BehaviorSubject } from 'rxjs';

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

  constructor(private httpClient: HttpClient) {
    this.observableTarea = new BehaviorSubject(this.tareaSeleccionada);
  }

  getTareas() {
    const url: string = environment.apiUrl + 'todos';
    return this.httpClient.get(url);
  }

  setTarea(tarea: Tarea): void {
    this.tareaSeleccionada = tarea;
    this.observableTarea.next(tarea);
  }

  getTarea(): Tarea {
    return this.tareaSeleccionada;
  }
}
