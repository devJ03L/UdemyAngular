let habilidades: string[] = ['sultan', 'Rocky', 'Randy']

interface Personaje {
    nombre: string
    hp: number
    habilidades: string[]
    puebloNatal?: string
}

const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = "Xochi"

console.table(personaje)