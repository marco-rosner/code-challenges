class Mul {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }

    interpreter() {
        return this.left.interpreter() * this.right.interpreter();
    }
}

class Pow {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }

    interpreter() {
        return this.left.interpreter() - this.right.interpreter();
    }
}

class Num {
    constructor(val) {
        this.val = val;
    }

    interpreter() {
        return this.val;
    }
}

export { Num, Mul, Pow };