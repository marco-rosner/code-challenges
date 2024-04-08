class Subject {
    constructor() {
        this.observers = []
    }

    addObserver(observer) {
        this.observers.push(observer)
    }

    removeObserver(observer) {
        const index = this.observers.indexOf(observer)

        if (index != -1) {
            this.observers.splice(index, 1)
        }
    }

    notify() {
        this.observers.forEach((observer) => {
            observer.update()
        })
    }
}

class Observer {
    constructor(name) {
        this.name = name
    }

    update() {
        console.log(`${this.name} received an update`)
    }
}

const subject = new Subject()
const observer1 = new Observer('Observer 1')
const observer2 = new Observer('Observer 2')

subject.addObserver(observer1)
subject.addObserver(observer2)

subject.notify()