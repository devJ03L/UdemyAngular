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

  paisesSugeridos: Pais[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.mostrarSugerencias = false;
    this.termino = termino
    this.hayError = false

    this.paisService.buscarPais(this.termino)
      .subscribe({
        next: paises => {
          this.paises = paises
        },
        error: err => {
          this.hayError = true
          this.paises = []
        }
      })
  }

  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais(termino)
      .subscribe({
        next: paises => this.paisesSugeridos = paises.splice(0, 5),
        error: err => this.paisesSugeridos = []
      });
  }

  buscarSugerido(termino: string) {
    this.buscar(termino);
  }
}
