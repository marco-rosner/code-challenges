class Plane {
    fly() {
        return 'flying'
    }
}

class PilotProxy {
    constructor(pilot) {
        this.pilot = pilot
    }

    fly() {
        return this.pilot.age < 18 ? 'too young to fly' : new Plane().fly()
    }
}

class Pilot {
    constructor(age) {
        this.age = age
    }
}

export { Plane, PilotProxy, Pilot }