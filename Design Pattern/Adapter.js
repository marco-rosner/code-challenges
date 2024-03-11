class Soldier {
    constructor(level) {
        this.level = level
    }

    attack() {
        return this.level * 1;
    }
}

class SuperSoldier {
    constructor(level) {
        this.level = level;
    }

    attackWithShield() {
        return this.level * 10;
    }
}

class SoldierAdapter {
    constructor(superSoldier) {
        this.superSoldier = superSoldier
    }

    attack() {
        return this.superSoldier.attackWithShield();
    }
}

export { Soldier, SuperSoldier, SoldierAdapter }