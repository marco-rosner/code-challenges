const calculator = (result = 0) => {
    const plus = (num) => {
        result += num

        return calculator(result)
    }

    const minus = (num) => {
        result -= num

        return calculator(result)
    }

    const multiply = (num) => {
        result *= num

        return calculator(result)
    }

    const divide = (num) => {
        result /= num

        return calculator(result)
    }

    const get = () => console.log(result)

    return { plus, minus, multiply, divide, get }
}

calculator().plus(2).minus(1).plus(19).divide(2).multiply(3).get()