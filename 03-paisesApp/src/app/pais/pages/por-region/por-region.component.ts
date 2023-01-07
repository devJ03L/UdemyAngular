import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `button{
      margin-right: 5px
    }`
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC']
  regionActiva: string = ''
  paises: Pais[] = []

  constructor(private paisService: PaisService){}

  getClaseCSS(region: string){
    return region === this.regionActiva ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

  activarRegion(region: string) {
    
    if(region === this.regionActiva){return}
    this.regionActiva = region
    this.buscar()
  }

  buscar(){
    this.paisService.buscarRegion(this.regionActiva)
    .subscribe({
      next: paises => {
        this.paises = paises  
        console.log(paises)         
      },
      error: err=> {        
        this.paises=[]
      }
    })
  }

}
