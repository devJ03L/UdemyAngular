import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {
  termino: string = ''
  hayError: boolean = false
  paises: Pais[] = []

  constructor(private paisService: PaisService){}

  buscar(termino: string){
    this.termino = termino
    this.hayError=false

    this.paisService.buscarPais(this.termino)
    .subscribe({
      next: paises => {
        this.paises = paises     
      },
      error: err=> {
        this.hayError=true
        this.paises=[]
      }
    })
  }
}
