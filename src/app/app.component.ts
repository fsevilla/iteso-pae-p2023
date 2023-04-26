import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nombre: string = 'Francisco';

  constructor() {
    setTimeout(() => {
      this.nombre = 'Juan';
    }, 3000);
  }
}
