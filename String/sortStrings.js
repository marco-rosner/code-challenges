const sortString = (arr) => arr.sort((a,b) => a.localeCompare(b))

console.log(sortString(["José", "Maria", "Marco", "Adalberto", "Zezo", "Daniel"]))
//  ['Adalberto', 'Daniel', 'José', 'Marco', 'Maria', 'Zezo']