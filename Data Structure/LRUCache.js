var { Node, DoubleLinkedList } = require("./DoubleLinkedList")

// Least Recently Used (LRU) cache
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity
        this.list = new DoubleLinkedList()
        this.cache = new Map()
    }

    get(key) {
        if (!this.cache.has(key)) return -1

        let node = this.cache.get(key)
        this.list.remove(node)
        this.list.insertHead(node)

        return node.value
    }

    put(key, value) {
        let newNode = new Node(key, value)

        if (this.cache.has(key)) {
            this.list.remove(this.cache.get(key))
        } else if (this.cache.size >= this.capacity) {
            let leastUsedKey = this.list.removeLast()
            this.cache.delete(leastUsedKey)
        }

        this.list.insertHead(newNode)
        this.cache.set(key, newNode)
    }

    size() {
        return this.cache.size
    }
}

cache = new LRUCache(2)

cache.put(1, 1)
cache.put(2, 2)
console.log(cache.get(1)) // returns 1
console.log(cache.size()) // returns 2
cache.put(3, 3) // removes key 2 due capacity
console.log(cache.get(2)) // reutrns -1 (not found)
cache.put(4, 4) // removes key 1 due capacity
console.log(cache.get(1)) // returns -1 (not found)
console.log(cache.get(3)) // returns 3
console.log(cache.get(4)) // returns 4