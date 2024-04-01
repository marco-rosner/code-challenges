class Car {
    constructor(instruction) {
        this.instruction = instruction
    }

    execute() {
        this.instruction.execute()
    }
}

class Engine {
    constructor() {
        this.state = false
    }

    on() {
        this.state = true
    }

    off() {
        this.state = false
    }
}

class OnInstruction {
    constructor(engine) {
        this.engine = engine
    }

    execute() {
        this.engine.on()
    }
}

class OffInstruction {
    constructor(engine) {
        this.engine = engine
    }

    execute() {
        this.engine.off()
    }
}

export { Car, Engine, OnInstruction, OffInstruction }