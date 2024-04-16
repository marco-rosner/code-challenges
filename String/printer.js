/*
Apple
Banana
Orange
Pineapple
Mango
Grape
Passion Fruit
Strawberry
Guava
Cashew
Papaya
Açaí
Persimmon
Cupuaçu

Perform the ordered sequence of operations:
1. go over every other line in the file
2. skip the first two
3. take the next two
4. print them out
*/

const printer = (input) => {
    const strArr = input.split('\n')
    // const resultArr = []
    // let skip = true

    // for (let i = 0; i < strArr.length; i++) {
    //     if (skip) {
    //         resultArr.push(String(strArr[i]).trimStart())
    //     }

    //     skip = !skip
    // }

    const resultArr = strArr.filter((val, i) => {
        if (i % 2 === 0) return String(val).trimStart()
    })

    console.log('Next two :', resultArr[2], resultArr[3])
}

const input = `Apple 
Banana 
Orange 
Pineapple 
Mango 
Grape 
Passion Fruit 
Strawberry 
Guava 
Cashew 
Papaya 
Açaí 
Persimmon 
Cupuaçu `

printer(input)