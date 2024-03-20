let ALPHABET_SIZE = 26

class TrieNode {
    constructor() {
        this.isEndOfWord = false;
        this.children = new Array(ALPHABET_SIZE)
        for (let i = 0; i < ALPHABET_SIZE; i++) {
            this.children[i] = null
        }
    }
}

let root

function insert(key) {
    let level, index
    let nodeAux = root

    for (level = 0; level < key.length; level++) {
        index = key[level].charCodeAt(0) - 'a'.charCodeAt(0)

        if (nodeAux.children[index] === null)
            nodeAux.children[index] = new TrieNode()

        nodeAux = nodeAux.children[index]
    }

    nodeAux.isEndOfWord = true
}

function search(key, verbose = false) {
    let level, index
    let nodeAux = root

    for (level = 0; level < key.length; level++) {
        index = key[level].charCodeAt(0) - 'a'.charCodeAt(0)

        if (nodeAux.children[index] === null) return false

        if (verbose) console.log(String.fromCharCode('a'.charCodeAt(0) + index))

        nodeAux = nodeAux.children[index]
    }

    return (nodeAux.isEndOfWord)
}

let keys = ["the", "a", "there", "answer", "any"]

root = new TrieNode()

for (let i = 0; i < keys.length; i++) {
    insert(keys[i])
}

console.log(search("the", true))
console.log(search("thee"))
console.log(search("there"))
console.log(search("ans"))
console.log(search("answer"))