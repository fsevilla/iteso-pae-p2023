import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/shared/interfaces/tarea';
import { TareaService } from 'src/app/shared/services/tarea.service';

@Component({
  selector: 'app-detalle-tarea',
  templateUrl: './detalle-tarea.component.html',
  styleUrls: ['./detalle-tarea.component.scss']
})
export class DetalleTareaComponent implements OnInit {

  tarea: Tarea = {
    titulo: '',
    descripcion: '',
    status: ''
  }

  constructor(private tareaService: TareaService) {}

  ngOnInit(): void {
    this.tarea = this.tareaService.getTarea();
  }

}
