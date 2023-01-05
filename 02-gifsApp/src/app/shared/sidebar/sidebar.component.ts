import { Component } from '@angular/core';
import { GifService } from '../../gifs/services/gif.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifService: GifService){}

  get historial(): string[]{
    return this.gifService.historial
  }

  buscar(termino: string){
    return this.gifService.buscarGifs(termino)
  }
}
