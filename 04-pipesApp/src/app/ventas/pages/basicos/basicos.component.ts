import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreLower: string = 'sultan'
  nombreUpper: string = 'SULTAN'
  nombreCompleto: string = 'SulTan AlLeXandEr'

  fecha: Date = new Date()
}
