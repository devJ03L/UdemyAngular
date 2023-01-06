import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})

export class PorCapitalComponent {

  termino: string = ''
  hayError: boolean = false
  paises: Pais[] = []

  constructor(private paisService: PaisService){}

  buscar(termino: string){
    this.termino = termino
    this.hayError=false

    this.paisService.buscarCapital(this.termino)
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
  sugerencias(termino: string){

  }
}
