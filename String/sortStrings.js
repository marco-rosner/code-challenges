const sortStrings = (arr) => arr.sort((a,b) => a.localeCompare(b))

console.log(sortStrings(["José", "Maria", "Marco", "Adalberto", "Zezo", "Daniel"]))
//  ['Adalberto', 'Daniel', 'José', 'Marco', 'Maria', 'Zezo']