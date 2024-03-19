// Create a bridge between types of Soldiers and types of Weapons

class Weapon {
    constructor(type) {
        this.type = type
    }

    get() {
        return this.type
    }
}

class Shield extends Weapon {
    constructor() {
        super('shield')
    }
}

class Rocket extends Weapon {
    constructor() {
        super('rocket')
    }
}

class SuperSoldier extends Soldier {
    constructor(weapon) {
        super(weapon)
    }

    attack() {
        return 'SuperSoldier, Weapon: ' + this.weapon.get()
    }
}

class IronMan extends Soldier {
    constructor(weapon) {
        super(weapon)
    }

    attack() {
        return 'Ironman, Weapon: ' + this.weapon.get()
    }
}

export { SuperSoldier, IronMan, Shield, Rocket }