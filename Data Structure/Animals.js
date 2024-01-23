class Animals {
    constructor(name, specie) {
        this.name = name
        this.specie = specie
    }

    sign() {
        return `${this.name} can sing`;
    }

    dance() {
        return `${this.name} can dance`;
    }
}

class Cats extends Animals {
    constructor(name, specie, whiskerColor) {
        super(name, specie)
        this.whiskerColor = whiskerColor
    }

    whiskers() {
        return `I have ${this.whiskerColor} whiskers`
    }
}

let clara = new Cats("Clara", "cat", "indigo")
console.log(clara.sign())
console.log(clara.whiskers())
console.log(clara)

let bingo = new Animals("Bingo", "Hairy")
console.log(bingo)