interface Reproductor {
    volumen: number
    segundo: number
    cancion: string
    detalles: Detalles
}

interface Detalles {
    autor: string
    anio: number
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Un buen perdedor',
    detalles: {
        autor: 'K-paz',
        anio: 2004
    }
}

const { volumen, segundo, cancion, detalles } = reproductor
const { autor } = detalles

// console.log('El volumen es de: ', volumen)
// console.log('El segundo es de: ', segundo)
// console.log('La cancion es de: ', cancion)
// console.log('El autor es: ', autor)

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks']
const [,,p1] = dbz
console.log(p1)