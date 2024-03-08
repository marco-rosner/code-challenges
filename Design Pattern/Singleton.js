class Animal {
    constructor() {
        if (typeof Animal.instance === 'object') {
            return Animal.instance
        }

        Animal.instance = this;

        return this
    }
}

export default Animal