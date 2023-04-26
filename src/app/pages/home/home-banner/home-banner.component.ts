import { Component } from '@angular/core';

interface Banner {
  titulo: string;
  descripcion: string;
  url?: string;
}


@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent {
  
  banner: Banner = {
    titulo: 'lorem ipsum',
    descripcion: 'dolor sit amet.',
    url: ''
  }
}
