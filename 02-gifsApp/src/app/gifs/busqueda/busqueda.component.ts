import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>

  constructor(private gifsService: GifService) {}

  buscar(){
    const valor = this.txtBuscar.nativeElement.value
    if(valor.trim().length === 0){
      return
    }
    this.gifsService.buscarGifs(valor)
    this.txtBuscar.nativeElement.value = ''
  }

}
