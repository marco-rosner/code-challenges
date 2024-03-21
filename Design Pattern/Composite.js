class Equipment {
    getPrice() {
        return this.price || 0
    }

    getName() {
        return this.name
    }

    setName(name) {
        this.name = name
    }
}

class Pattern extends Equipment {
    constructor() {
        super()
        this.equipments = []
    }

    add(equipment) {
        this.equipments.push(equipment)
    }

    getPrice() {
        return this.equipments
            .map(equipment => equipment.getPrice())
            .reduce((a, b) => (a + b))
    }
}

class Cabinet extends Pattern {
    constructor() {
        super()
        this.setName('cabinet')
    }
}

// leafs
class HardDrive extends Equipment {
    constructor() {
        super()
        this.setName('Hard Drive')
        this.price = 250
    }
}

class Memory extends Equipment {
    constructor() {
        super()
        this.setName('Memory')
        this.price = 350
    }
}

export { Cabinet, Memory, HardDrive }