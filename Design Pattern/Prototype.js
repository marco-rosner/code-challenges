class Fruit {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    clone() {
        return new Fruit(this.name, this.weight)
    }
}

export default Fruit