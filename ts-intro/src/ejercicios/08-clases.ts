class PersonaNormal{
    constructor(
        public nombre: string,
        public direccion: string
    ){}
}

class Heroe extends PersonaNormal {
    // alterEgo: string
    // edad: number
    // nombreReal: string

    constructor(
        public alterEgo: string,
        public edad?: number,
        public nombreReal?: string
    ) { 
        super(nombreReal, 'NY')
    }
}

const ironMan = new Heroe('IronMan', 45, 'Tony')

console.log(ironMan)