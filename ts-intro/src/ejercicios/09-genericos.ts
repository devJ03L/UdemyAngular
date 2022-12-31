function queTipoSoy<T>(argumento: T){
    return argumento
}

let soyString = queTipoSoy('Hola')
let soyNumber = queTipoSoy(100)
let soyArray = queTipoSoy([100,200])
let soyExplicito = queTipoSoy<Number>(100)
