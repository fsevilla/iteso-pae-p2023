import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnChanges {

  buscar: string = '';
  @Input() items: any[] = [];
  itemsFiltrados: any[] = [];

  @Output() onSelected: EventEmitter<any> = new EventEmitter();


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.itemsFiltrados = this.items;
  }

  filtrar() {
    const buscar = this.buscar.toLowerCase();
    this.itemsFiltrados = this.items.filter(item => {
      return item.title?.toLowerCase().includes(buscar);
    });
  }

  seleccionar(item: any) {
    this.onSelected.emit(item);
  }


}
