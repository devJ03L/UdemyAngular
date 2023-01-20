import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = "Sultana"
  genero: string = "femenino"
  invitacionMapa = {
    "masculino": "invitarlo",
    "femenino": "invitarla",
  }

  //i18nPlural
  clientes: string[] = ['Sultan', 'Rocky', 'Coqueta', 'Randy']
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente() {
    this.nombre = "Sultan"
    this.genero = "masculino"
  }

  borrarCliente() { 
    this.clientes.pop()
  }

  //KeyValue Pipe
  persona = {
    nombre: "Sultan",
    edad: 32,
    direccion: "Neza, EDOMEX"
  }

  //JSON Pipe
  heroes=[
    {
      nombre: "Superman",
      vuela: true
    },
    {
      nombre: "Batman",
      vuela: false
    },
    {
      nombre: "Aquaman",
      vuela: true
    },
  ]

  //Async Pipe
  miObservable = interval(1000)

  valorPromesa = new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve("Tenemos respuesta")
    }, 3500);
  })
}
