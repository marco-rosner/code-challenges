function calculator() {
    let result = 0

    function plus(val) {
        result += val
        return this
    }

    function minus(val) {
        result -= val
        return this
    }

    function multiply(val) {
        result *= val
        return this
    }

    function divide(val) {
        result /= val
        return this
    }

    function get() {
        console.log(result)
        return this;
    }

    return { plus, minus, multiply, divide, get }
}

calculator().plus(2).minus(1).plus(19).divide(2).multiply(3).get() // 30