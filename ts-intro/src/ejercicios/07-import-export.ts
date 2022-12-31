import { Producto, calculaISV } from './06-desestructuracion';


const carritoCompras: Producto[] = [
    {
        desc: 'Telefono1',
        precio: 100
    },
    {
        desc: 'Telefono2',
        precio: 200
    }
]

const [total, isv] = calculaISV(carritoCompras)

console.log('Total ', total)
console.log('ISV ', isv)
