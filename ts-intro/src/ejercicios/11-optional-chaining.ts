interface Pasajero {
    nombre: string
    hijos?: string[]
}

const pasajero1: Pasajero = {
    nombre: 'Joel'
}

const pasajero2: Pasajero = {
    nombre: 'Sultan',
    hijos: ['Megan', 'Rusky']
}

function imprimeHijos(pasajero: Pasajero): void {
    const cuantosHijos = pasajero.hijos?.length || 0
    console.log(cuantosHijos)
}

imprimeHijos(pasajero1)